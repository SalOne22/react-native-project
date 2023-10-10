import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { ChangeableProfileImage } from '~/components/changeable/ChangeableProfileImage';
import { Input } from '~/components/inputs/Input';
import { PasswordInput } from '~/components/inputs/PasswordInput';

import { Button } from '~/ui/buttons/Button';
import { Header } from '~/ui/typography/Header';
import { ErrorText } from '~/ui/typography/ErrorText';

import { parseAuthError, uploadImage } from '~/utils';
import { auth } from '~/config';
import { setUser } from '~/redux/slices/authSlice';

export const RegistrationForm = ({ style }) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      picture: null,
    },
  });

  const onSubmit = async ({ username, email, password, picture }) => {
    username = username.trim();
    email = email.trim();
    password = password.trim();

    try {
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(credentials.user, {
        displayName: username,
        photoURL: picture && (await uploadImage('profile_images', picture.uri)),
      });

      const { photoURL, uid, email: userEmail } = credentials.user;

      dispatch(setUser({ uid, username, email: userEmail, picture: photoURL }));

      reset();
    } catch (err) {
      const [name, message] = parseAuthError(err);
      setError(name, { type: 'custom', message });
    }
  };

  return (
    <View style={style}>
      <Controller
        control={control}
        render={({ field: { value } }) => (
          <ChangeableProfileImage
            style={styles.userProfileImage}
            source={value}
            setSource={(picture) => setValue('picture', picture)}
          />
        )}
        name="picture"
      />

      <Header style={styles.headerText} title="Реєстрація" />

      <View style={styles.input}>
        <Controller
          control={control}
          rules={{
            required: "Це поле - обов'язкове",
            minLength: { value: 3, message: 'Мінімальна довжина - 3 символу' },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              autoComplete="username"
              placeholder="Логін"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && <ErrorText text={errors.username.message} />}
      </View>

      <View style={styles.input}>
        <Controller
          control={control}
          rules={{
            required: "Це поле - обов'язкове",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}\s*$/i,
              message: 'Введіть валідний адрес пошти',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              placeholder="Адреса електронної пошти"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <ErrorText text={errors.email.message} />}
      </View>

      <View style={styles.passwordInput}>
        <Controller
          control={control}
          rules={{
            required: "Це поле - обов'язкове",
            minLength: { value: 6, message: 'Мінімальна довжина - 6 символів' },
          }}
          render={({ field: { onChange, value } }) => (
            <PasswordInput onChangeText={onChange} value={value} />
          )}
          name="password"
        />
        {errors.password && <ErrorText text={errors.password.message} />}
      </View>

      {errors.root && (
        <ErrorText style={{ textAlign: 'center', marginBottom: 8 }} text={errors.root.message} />
      )}

      <Button title="Зареєструватися" onPress={handleSubmit(onSubmit)} disabled={isSubmitting} />
    </View>
  );
};

RegistrationForm.propTypes = {
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  userProfileImage: {
    marginBottom: 32,
  },
  headerText: {
    marginBottom: 33,
  },
  input: {
    marginBottom: 16,
  },
  passwordInput: {
    marginBottom: 43,
  },
});
