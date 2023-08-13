import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const LogoutButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      <Feather name="log-out" size={24} color="#bdbdbd" />
    </TouchableOpacity>
  );
};
