import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Input } from './Input';
import { LinkButton } from './LinkButton';

export const PasswordInput = ({ style }) => {
  return (
    <View style={[styles.passwordWrapper, style]}>
      <Input placeholder="Пароль" />
      <LinkButton style={styles.showButton}>Показати</LinkButton>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordWrapper: {
    position: 'relative',
  },
  showButton: {
    position: 'absolute',
    top: 0,
    right: 16,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
