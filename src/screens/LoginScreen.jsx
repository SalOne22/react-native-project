import { StyleSheet, Text } from 'react-native';
import { Background } from '../components/Background';
import { StaticModal } from '../components/StaticModal';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { PasswordInput } from '../components/PasswordInput';
import { Button } from '../components/Button';
import { LinkButton } from '../components/LinkButton';
import bgImage from '../../assets/images/PhotoBG.jpg';
import { Controller, useForm } from 'react-hook-form';

export default function LoginScreen() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    // Магическое число ✨
    // TODO: Надо заменить это на высоту от последнего инпута до конца контейнера
    <Background image={bgImage} verticalOffset={-226}>
      <StaticModal style={styles.modal}>
        <Header style={styles.header} title="Увійти" />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              style={styles.input}
              autoComplete="email"
              placeholder="Адреса електронної пошти"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              style={styles.password}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />

        <Button
          style={styles.loginButton}
          title="Увійти"
          onPress={handleSubmit(onSubmit)}
        />
        <LinkButton textStyle={styles.registrationButton}>
          Немає аккаунту?{' '}
          <Text style={styles.registrationLink}>Зареєструватися</Text>
        </LinkButton>
      </StaticModal>
    </Background>
  );
}

const styles = StyleSheet.create({
  modal: {
    paddingTop: 32,
    paddingBottom: 111,
  },
  header: {
    marginBottom: 33,
  },
  input: {
    marginBottom: 16,
  },
  password: {
    marginBottom: 43,
  },
  loginButton: {
    marginBottom: 16,
  },
  registrationButton: {
    textAlign: 'center',
  },
  registrationLink: {
    textDecorationLine: 'underline',
  },
});
