import { View, StyleSheet } from 'react-native';

export const StaticModal = ({ children }) => {
  return <View style={styles.modal}>{children}</View>;
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
