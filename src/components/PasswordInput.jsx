import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Input } from './Input';
import { LinkButton } from './LinkButton';
import { useState } from 'react';

export const PasswordInput = ({ style }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.passwordWrapper, style]}>
      <Input
        placeholder="Пароль"
        type="password"
        secureTextEntry={!showPassword}
      />
      <LinkButton
        style={styles.showButton}
        onPress={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? 'Сховати' : 'Показати'}
      </LinkButton>
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
