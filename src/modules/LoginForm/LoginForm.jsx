import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { Input } from '~/components/inputs/Input';
import { PasswordInput } from '~/components/inputs/PasswordInput';

import { Header } from '~/ui/Header';
import { Button } from '~/ui/buttons/Button';
import { ErrorText } from '~/ui/ErrorText';

export const LoginForm = ({ style }) => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
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

      <Button style={styles.loginButton} title="Увійти" onPress={handleSubmit(onSubmit)} />
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
