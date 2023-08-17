import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export const Button = ({ title, style, onPress, disabled = false }) => {
  return (
    <TouchableOpacity style={style} activeOpacity={0.75} onPress={onPress} disabled={disabled}>
      <View style={[styles.button, disabled && styles.buttonDisabled]}>
        <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff6c00',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  buttonDisabled: {
    backgroundColor: '#f6f6f6',
  },
  buttonTextDisabled: {
    color: '#bdbdbd',
  },
});
