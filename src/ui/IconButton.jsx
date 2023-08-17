import { TouchableOpacity } from 'react-native';

export const IconButton = ({ icon, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      {icon}
    </TouchableOpacity>
  );
};
