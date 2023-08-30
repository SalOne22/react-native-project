import { Feather } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';

import { auth } from '~/config';

import { IconButton } from '~/ui/buttons/IconButton';

export const LogoutButton = () => {
  return (
    <IconButton
      icon={<Feather name="log-out" size={24} color="#bdbdbd" />}
      onPress={() => signOut(auth)}
    />
  );
};
