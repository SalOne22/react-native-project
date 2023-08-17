import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { IconButton } from '~/ui/IconButton';

export const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <IconButton
      icon={<Feather name="arrow-left" size={24} color="#000" />}
      onPress={() => navigation.goBack()}
    />
  );
};
