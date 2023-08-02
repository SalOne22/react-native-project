import { Text, ImageBackground, View, StyleSheet, Image } from 'react-native';
import bgImage from '../../assets/images/PhotoBG.jpg';
import userProfileImage from '../../assets/images/userProfile.jpg';
import { RegistrationProfileImage } from '../components/RegistrationProfileImage';

export default function RegistrationScreen() {
  return (
    <ImageBackground style={styles.container} source={bgImage}>
      <View style={styles.modal}>
        {/* Убрать source - появиться пустая картинка */}
        <RegistrationProfileImage
          style={styles.userProfileImage}
          source={userProfileImage}
        />
        <Text style={styles.headerText}>Реєстрація</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 45,
  },
  userProfileImage: {
    marginBottom: 32,
  },
  headerText: {
    color: '#212121',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
  },
});
