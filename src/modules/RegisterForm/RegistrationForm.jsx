import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import userProfileImage from '@/assets/images/userProfile.jpg';

import { ChangeableProfileImage } from '~/components/changeable/ChangeableProfileImage';
import { Input } from '~/components/inputs/Input';
import { PasswordInput } from '~/components/inputs/PasswordInput';

import { Button } from '~/ui/buttons/Button';
import { Header } from '~/ui/typography/Header';
import { ErrorText } from '~/ui/typography/ErrorText';

export const RegistrationForm = ({ style }) => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigation.navigate('Home');
  };

  return (
    <View style={style}>
      {/* Убрать source - появиться пустая картинка */}
      <ChangeableProfileImage style={styles.userProfileImage} source={userProfileImage} />
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

      <Button title="Зареєструватися" onPress={handleSubmit(onSubmit)} />
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
