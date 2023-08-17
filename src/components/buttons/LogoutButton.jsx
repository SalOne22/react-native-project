import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { IconButton } from '../ui/IconButton';

export const LogoutButton = () => {
  const navigation = useNavigation();

  return (
    <IconButton
      icon={<Feather name="log-out" size={24} color="#bdbdbd" />}
      onPress={() => navigation.navigate('Login')}
    />
  );
};
