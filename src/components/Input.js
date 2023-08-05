import { TextInput, StyleSheet } from 'react-native';

export const Input = ({ style, placeholder }) => {
  return <TextInput style={[styles.input, style]} placeholder={placeholder} />;
};

const styles = StyleSheet.create({
  input: {
    paddingTop: 16,
    paddingBottom: 15,
    paddingHorizontal: 16,
    backgroundColor: '#f6f6f6',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'Roboto-Regular',
  },
});
