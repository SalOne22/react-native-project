import PropTypes from 'prop-types';
import { Image, StyleSheet } from 'react-native';

export const PostImage = ({ style, image }) => {
  return <Image style={[styles.image, style]} source={{ uri: image }} />;
};

PostImage.propTypes = {
  style: PropTypes.object,
  image: PropTypes.any,
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
});
