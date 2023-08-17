import PropTypes from 'prop-types';
import { Image, StyleSheet } from 'react-native';

export const ProfileImage = ({ style, source }) => {
  return <Image style={[styles.image, style]} source={source} />;
};

ProfileImage.propTypes = {
  style: PropTypes.object,
  source: PropTypes.any,
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 16,
    width: 60,
    height: 60,
  },
});
