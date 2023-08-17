import { Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import { IconButton } from '~/ui/IconButton';

export const DeleteButton = ({ style }) => {
  return (
    <IconButton
      style={[styles.button, style]}
      icon={<Feather name="trash-2" size={24} color="#bdbdbd" />}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
});
