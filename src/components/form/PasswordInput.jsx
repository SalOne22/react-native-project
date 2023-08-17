import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Input } from './Input';

import { LinkButton } from '~/ui/LinkButton';

export const PasswordInput = ({ style, value, onChangeText, isNew = false }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <View style={[styles.passwordWrapper, style]}>
      <Input
        placeholder="Пароль"
        autoComplete={isNew ? 'new-password' : 'current-password'}
        hidden={!isPasswordShown}
        value={value}
        onChangeText={onChangeText}
      />
      <LinkButton style={styles.showButton} onPress={() => setIsPasswordShown((prev) => !prev)}>
        {isPasswordShown ? 'Сховати' : 'Показати'}
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
