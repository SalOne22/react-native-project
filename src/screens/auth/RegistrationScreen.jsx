import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import bgImage from '@/assets/images/PhotoBG.jpg';

import { RegistrationForm } from '~/modules/RegisterForm';

import { Background } from '~/ui/wrappers/Background';
import { LinkButton } from '~/ui/buttons/LinkButton';
import { StaticModal } from '~/ui/wrappers/StaticModal';
import { KeyboardHandler } from '~/components/KeyboardHandler';

export default function RegistrationScreen() {
  const navigation = useNavigation();

  return (
    // Магическое число ✨
    // TODO: Надо заменить это на высоту от последнего инпута до конца контейнера
    <KeyboardHandler verticalOffset={-160}>
      <Background image={bgImage}>
        <StaticModal>
          <RegistrationForm style={styles.registrationForm} />
          <LinkButton onPress={() => navigation.navigate('Login')} textStyle={styles.loginButton}>
            Вже є аккаунт? Увійти
          </LinkButton>
        </StaticModal>
      </Background>
    </KeyboardHandler>
  );
}

const styles = StyleSheet.create({
  registrationForm: {
    marginBottom: 16,
  },
  loginButton: {
    textAlign: 'center',
  },
});
