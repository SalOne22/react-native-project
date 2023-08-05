import { View, StyleSheet } from 'react-native';

export const StaticModal = ({ children, style }) => {
  return <View style={[styles.modal, style]}>{children}</View>;
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
