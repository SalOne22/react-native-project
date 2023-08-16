import { StyleSheet, View } from 'react-native';
import { Post } from './Post';

export const PostList = ({ posts = [] }) => {
  return (
    <View style={styles.list}>
      {posts.map(({ id, title, image, comments, likes, location }) => (
        <Post
          key={id}
          title={title}
          image={image}
          comments={comments}
          likes={likes}
          location={location}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 32,
    // Хак, чтобы было видно все посты
    paddingBottom: 64,
  },
});
