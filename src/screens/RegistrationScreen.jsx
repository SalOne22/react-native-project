import { StyleSheet } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();

  const { control, handleSubmit, reset } = useForm({
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
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              style={styles.input}
              autoComplete="username"
              placeholder="Логін"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />

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
              style={styles.passwordInput}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />

        <Button
          style={styles.registerButton}
          title="Зареєструватися"
          onPress={handleSubmit(onSubmit)}
        />
        <LinkButton
          onPress={() => navigation.navigate('Login')}
          textStyle={styles.loginButton}
        >
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
