import { Feather } from '@expo/vector-icons';

import { IconButton } from './IconButton';

export const LogoutButton = (props) => {
  return <IconButton icon={<Feather name="log-out" size={24} color="#bdbdbd" />} />;
};
