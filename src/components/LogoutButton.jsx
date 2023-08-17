import { Feather } from '@expo/vector-icons';

import { IconButton } from '../ui/IconButton';

export const LogoutButton = () => {
  return <IconButton icon={<Feather name="log-out" size={24} color="#bdbdbd" />} />;
};
