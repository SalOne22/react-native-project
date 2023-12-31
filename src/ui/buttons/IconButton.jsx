import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

export const IconButton = ({ icon, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      {icon}
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
};
