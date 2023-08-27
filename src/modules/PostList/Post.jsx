import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Post = ({
  image,
  title,
  comments,
  likes,
  location,
  geolocation,
  isLiked = false,
  showLikes = true,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bottomContent}>
        <TouchableOpacity
          style={styles.item}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Comments')}
        >
          <Feather
            name="message-circle"
            size={24}
            color={comments.length > 0 ? '#ff6c00' : '#bdbdbd'}
          />
          <Text style={[styles.itemText, comments.length > 0 && styles.accent]}>
            {comments.length}
          </Text>
        </TouchableOpacity>
        {showLikes && (
          <View style={styles.item}>
            <Feather name="thumbs-up" size={24} color={isLiked ? '#ff6c00' : '#bdbdbd'} />
            <Text style={[styles.itemText, likes > 0 && styles.accent]}>{likes}</Text>
          </View>
        )}
        <TouchableOpacity
          style={[styles.item, styles.locationItem]}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Map')}
        >
          <Feather name="map-pin" size={24} color="#bdbdbd" />
          <Text
            style={[styles.itemText, styles.locationItemText, !showLikes && styles.withoutLikes]}
            numberOfLines={1}
          >
            {location}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Post.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      userPicture: PropTypes.any,
      userId: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    }),
  ).isRequired,
  likes: PropTypes.number,
  location: PropTypes.string.isRequired,
  geolocation: PropTypes.exact({
    altitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  isLiked: PropTypes.bool,
  showLikes: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    marginBottom: 8,
  },
  bottomContent: {
    flexDirection: 'row',
    gap: 24,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: '#bdbdbd',
    fontFamily: 'Roboto-Regular',
    marginLeft: 6,
  },
  accent: {
    color: '#212121',
  },
  locationItem: {
    marginLeft: 'auto',
    maxWidth: '70%',
  },
  withoutLikes: {
    maxWidth: '100%',
  },
  locationItemText: {
    color: '#212121',
    textDecorationLine: 'underline',
  },
});
