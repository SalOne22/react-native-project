import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Post } from './Post';

export const PostList = ({ posts = [] }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item: { comments, image, location, title, likes } }) => (
          <Post
            comments={comments}
            image={image}
            location={location}
            title={title}
            likes={likes}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
