import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { PostImage } from '~/ui/PostImage';
import { updatePostLike } from '~/utils/updatePostLike';
import { selectUser } from '~/redux/slices/authSlice';

export const Post = ({
  id,
  image,
  title,
  comments,
  likes,
  location,
  geolocation,
  isLiked = false,
  showLikes = true,
}) => {
  const { uid } = useSelector(selectUser) ?? {};
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PostImage style={styles.image} image={image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bottomContent}>
        <TouchableOpacity
          style={styles.item}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Comments', { id })}
        >
          <Feather name="message-circle" size={24} color={comments > 0 ? '#ff6c00' : '#bdbdbd'} />
          <Text style={[styles.itemText, comments > 0 && styles.accent]}>{comments}</Text>
        </TouchableOpacity>
        {showLikes && (
          <View style={styles.item}>
            <TouchableOpacity onPress={() => updatePostLike(id, !isLiked, uid)}>
              <Feather name="thumbs-up" size={24} color={isLiked ? '#ff6c00' : '#bdbdbd'} />
            </TouchableOpacity>
            <Text style={[styles.itemText, likes > 0 && styles.accent]}>{likes}</Text>
          </View>
        )}
        <TouchableOpacity
          style={[styles.item, styles.locationItem]}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Map', geolocation)}
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
  id: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  likes: PropTypes.number,
  location: PropTypes.string.isRequired,
  geolocation: PropTypes.exact({
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
