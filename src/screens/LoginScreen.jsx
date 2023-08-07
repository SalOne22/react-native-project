import { StyleSheet, Text } from 'react-native';
import { Background } from '../components/Background';
import { StaticModal } from '../components/StaticModal';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { PasswordInput } from '../components/PasswordInput';
import { Button } from '../components/Button';
import { LinkButton } from '../components/LinkButton';
import bgImage from '../../assets/images/PhotoBG.jpg';
import { useForm } from '../hooks';

export default function LoginScreen() {
  const { state, dispatch, submit } = useForm(
    {
      email: '',
      password: '',
    },
    console.log
  );

  const createChangeHandler = (type) => {
    return (text) => {
      dispatch({ type: type, payload: text });
    };
  };

  return (
    // Магическое число ✨
    // TODO: Надо заменить это на высоту от последнего инпута до конца контейнера
    <Background image={bgImage} verticalOffset={-226}>
      <StaticModal style={styles.modal}>
        <Header style={styles.header} title="Увійти" />
        <Input
          style={styles.input}
          autoComplete="email"
          placeholder="Адреса електронної пошти"
          value={state.email}
          onChangeText={createChangeHandler('update_email')}
        />
        <PasswordInput
          style={styles.password}
          value={state.password}
          onChangeText={createChangeHandler('update_password')}
        />
        <Button style={styles.loginButton} title="Увійти" onPress={submit} />
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
