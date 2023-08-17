import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

export const StaticModal = ({ children, style }) => {
  return <View style={[styles.modal, style]}>{children}</View>;
};

StaticModal.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 45,
  },
});
