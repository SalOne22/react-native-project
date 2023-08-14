import { ScrollView, StyleSheet } from 'react-native';

export const ScrollContainer = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});
