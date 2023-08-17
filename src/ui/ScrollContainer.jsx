import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';

export const ScrollContainer = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

ScrollContainer.propTypes = {
  children: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});
