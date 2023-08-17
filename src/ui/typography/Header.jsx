import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

export const Header = ({ title, style }) => <Text style={[style, styles.headerText]}>{title}</Text>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  headerText: {
    color: '#212121',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    letterSpacing: 0.3,
  },
});
