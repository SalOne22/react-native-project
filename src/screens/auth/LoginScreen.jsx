import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';

import bgImage from '@/assets/images/PhotoBG.jpg';
import { Background } from '~/ui/wrappers/Background';
import { LinkButton } from '~/ui/buttons/LinkButton';
import { StaticModal } from '~/ui/wrappers/StaticModal';
import { KeyboardHandler } from '~/components/KeyboardHandler';
import { LoginForm } from '~/modules/LoginForm';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    // Магическое число ✨
    // TODO: Надо заменить это на высоту от последнего инпута до конца контейнера
    <KeyboardHandler verticalOffset={-226}>
      <Background image={bgImage}>
        <StaticModal style={styles.modal}>
          <LoginForm style={styles.loginForm} />
          <LinkButton
            onPress={() => navigation.navigate('Registration')}
            textStyle={styles.registrationButton}
          >
            Немає аккаунту? <Text style={styles.registrationLink}>Зареєструватися</Text>
          </LinkButton>
        </StaticModal>
      </Background>
    </KeyboardHandler>
  );
}

const styles = StyleSheet.create({
  modal: {
    paddingTop: 32,
    paddingBottom: 111,
  },
  loginForm: {
    marginBottom: 16,
  },
  registrationButton: {
    textAlign: 'center',
  },
  registrationLink: {
    textDecorationLine: 'underline',
  },
});
