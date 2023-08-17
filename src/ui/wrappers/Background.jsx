import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Platform,
  StyleSheet,
  Keyboard,
} from 'react-native';

export const Background = ({ children, image, verticalOffset }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={verticalOffset}
    >
      <ImageBackground style={styles.bgImage} source={image}>
        {children}
      </ImageBackground>
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
);

Background.propTypes = {
  children: PropTypes.any,
  image: PropTypes.any,
  verticalOffset: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
