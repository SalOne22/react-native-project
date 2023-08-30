import PropTypes from 'prop-types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { Input } from '~/components/inputs/Input';
import { PasswordInput } from '~/components/inputs/PasswordInput';

import { Header } from '~/ui/typography/Header';
import { Button } from '~/ui/buttons/Button';
import { ErrorText } from '~/ui/typography/ErrorText';

import { parseAuthError } from '~/utils';
import { auth } from '~/config';

export const LoginForm = ({ style }) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      email = email.trim();
      password = password.trim();

      await signInWithEmailAndPassword(auth, email, password);

      reset();
    } catch (err) {
      const [name, message] = parseAuthError(err);
      setError(name, { type: 'custom', message });
    }
  };

  return (
    <View style={style}>
      <Header style={styles.header} title="Увійти" />

      <View style={styles.input}>
        <Controller
          control={control}
          rules={{ required: "Це поле - обов'язкове" }}
          render={({ field: { onChange, value } }) => (
            <Input
              autoComplete="email"
              placeholder="Адреса електронної пошти"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <ErrorText text={errors.email.message} />}
      </View>

      <View style={styles.password}>
        <Controller
          control={control}
          rules={{ required: "Це поле - обов'язкове" }}
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

      <Button
        style={styles.loginButton}
        title="Увійти"
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      />
    </View>
  );
};

LoginForm.propTypes = {
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 33,
  },
  input: {
    marginBottom: 16,
  },
  password: {
    marginBottom: 43,
  },
});
