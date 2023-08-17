import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const LinkButton = ({ style, textStyle, children, onPress }) => {
  return (
    <TouchableOpacity style={style} activeOpacity={0.6} onPress={onPress}>
      <Text style={[styles.link, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

LinkButton.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  children: PropTypes.any,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  link: {
    color: '#1b4371',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
