import { StyleSheet } from 'react-native';
import { RegistrationProfileImage } from '../components/RegistrationProfileImage';
import { Background } from '../components/Background';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { PasswordInput } from '../components/PasswordInput';
import { Button } from '../components/Button';
import { LinkButton } from '../components/LinkButton';
import { StaticModal } from '../components/StaticModal';
import bgImage from '../../assets/images/PhotoBG.jpg';
import userProfileImage from '../../assets/images/userProfile.jpg';

export default function RegistrationScreen() {
  return (
    // Магическое число ✨
    // TODO: Надо заменить это на высоту от последнего инпута до конца контейнера
    <Background image={bgImage} verticalOffset={-160}>
      <StaticModal>
        {/* Убрать source - появиться пустая картинка */}
        <RegistrationProfileImage
          style={styles.userProfileImage}
          source={userProfileImage}
        />
        <Header style={styles.headerText} title="Реєстрація" />
        <Input style={styles.input} type="username" placeholder="Логін" />
        <Input
          style={styles.input}
          type="emailAddress"
          placeholder="Адреса електронної пошти"
        />
        <PasswordInput style={styles.passwordInput} />
        <Button style={styles.registerButton} title="Зареєструватися" />
        <LinkButton textStyle={styles.loginButton}>
          Вже є аккаунт? Увійти
        </LinkButton>
      </StaticModal>
    </Background>
  );
}

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
  registerButton: {
    marginBottom: 16,
  },
  loginButton: {
    textAlign: 'center',
  },
});
