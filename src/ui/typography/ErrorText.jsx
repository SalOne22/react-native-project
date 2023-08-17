import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

export const ErrorText = ({ style, text }) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

ErrorText.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Medium',
    color: '#f05533',
  },
});
