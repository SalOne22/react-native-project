import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { Image, View, Text, StyleSheet } from 'react-native';

export const ChangeablePostImage = ({ style, source }) => {
  return (
    <View style={[style]}>
      <View style={styles.container}>
        <Image style={styles.image} source={source} />
        <View style={styles.iconContainer}>
          <View style={[styles.icon, source && { backgroundColor: 'rgba(255 255 255 / 0.3)' }]}>
            <FontAwesome name="camera" size={24} color={source ? '#fff' : '#bdbdbd'} />
          </View>
        </View>
      </View>
      <Text style={styles.bottomText}>{source ? 'Редагувати фото' : 'Завантажте фото'}</Text>
    </View>
  );
};

ChangeablePostImage.propTypes = {
  style: PropTypes.object,
  source: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 8,
  },
  image: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    backgroundColor: '#f6f6f6',
    width: '100%',
    height: 240,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: '#bdbdbd',
    fontFamily: 'Roboto-Regular',
  },
});
