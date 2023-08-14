import { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export const GhostInput = ({
  style,
  placeholder,
  autoComplete,
  hidden,
  value,
  onChangeText,
  icon,
}) => {
  const [focused, setFocused] = useState(false);

  if (!icon)
    return (
      <TextInput
        style={[
          styles.container,
          styles.input,
          focused && styles.focused,
          style,
        ]}
        placeholder={placeholder}
        placeholderTextColor={'#bdbdbd'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        secureTextEntry={hidden}
        autoComplete={autoComplete}
        value={value}
        onChangeText={onChangeText}
      />
    );

  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>{icon}</View>
      <TextInput
        style={[styles.input, { marginLeft: 28 }, focused && styles.focused]}
        placeholder={placeholder}
        placeholderTextColor={'#bdbdbd'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        secureTextEntry={hidden}
        autoComplete={autoComplete}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
  input: {
    paddingTop: 16,
    paddingBottom: 15,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
  },
  focused: {
    backgroundColor: '#fff',
    borderColor: '#ff6c00',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
