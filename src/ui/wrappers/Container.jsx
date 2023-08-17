import PropTypes from 'prop-types';
import { Keyboard, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const Container = ({ style, children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, style]}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 32,
    height: '100%',
  },
});
