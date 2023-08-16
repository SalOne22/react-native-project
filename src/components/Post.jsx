import { Image, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Post = ({
  image,
  title,
  comments,
  likes,
  location,
  isLiked = false,
  showLikes = true,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bottomContent}>
        <View style={styles.item}>
          <Feather
            name="message-circle"
            size={24}
            color={comments > 0 ? '#ff6c00' : '#bdbdbd'}
          />
          <Text style={[styles.itemText, comments > 0 && styles.accent]}>
            {comments}
          </Text>
        </View>
        {showLikes && (
          <View style={styles.item}>
            <Feather
              name="thumbs-up"
              size={24}
              color={isLiked ? '#ff6c00' : '#bdbdbd'}
            />
            <Text style={[styles.itemText, likes > 0 && styles.accent]}>
              {likes}
            </Text>
          </View>
        )}
        <View style={[styles.item, styles.locationItem]}>
          <Feather name="map-pin" size={24} color="#bdbdbd" />
          <Text
            style={[styles.itemText, styles.locationItemText]}
            numberOfLines={1}
          >
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
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
  locationItemText: {
    color: '#212121',
    textDecorationLine: 'underline',
  },
});
