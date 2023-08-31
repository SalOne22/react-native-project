import { Feather } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import { auth } from '~/config';
import { setUser } from '~/redux/slices/authSlice';

import { IconButton } from '~/ui/buttons/IconButton';

export const LogoutButton = () => {
  const dispatch = useDispatch();

  return (
    <IconButton
      icon={<Feather name="log-out" size={24} color="#bdbdbd" />}
      onPress={() => {
        signOut(auth);
        dispatch(setUser(null));
      }}
    />
  );
};
