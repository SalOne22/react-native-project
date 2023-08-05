import { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const Input = ({ style, placeholder }) => {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      style={[styles.input, focused && styles.focused, style]}
      placeholder={placeholder}
      placeholderTextColor={'#bdbdbd'}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
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
    color: '#212121',
  },
  focused: {
    backgroundColor: '#fff',
    borderColor: '#ff6c00',
  },
});
