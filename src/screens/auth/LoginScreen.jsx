import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text } from 'react-native';

import bgImage from '@/assets/images/PhotoBG.jpg';
import { Input } from '~/components/form/Input';
import { PasswordInput } from '~/components/form/PasswordInput';
import { Background } from '~/ui/Background';
import { Button } from '~/ui/Button';
import { Header } from '~/ui/Header';
import { LinkButton } from '~/ui/LinkButton';
import { StaticModal } from '~/ui/StaticModal';

export default function LoginScreen() {
  const navigation = useNavigation();

  const { control, handleSubmit, reset } = useForm({
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
            <PasswordInput style={styles.password} onChangeText={onChange} value={value} />
          )}
          name="password"
        />

        <Button style={styles.loginButton} title="Увійти" onPress={handleSubmit(onSubmit)} />
        <LinkButton
          onPress={() => navigation.navigate('Registration')}
          textStyle={styles.registrationButton}
        >
          Немає аккаунту? <Text style={styles.registrationLink}>Зареєструватися</Text>
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
