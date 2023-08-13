import { Image, StyleSheet } from 'react-native';

export const ProfileImage = ({ style, source }) => {
  return <Image style={[styles.image, style]} source={source} />;
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 16,
    width: 60,
    height: 60,
  },
});
