import PropTypes from 'prop-types';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { Post } from './Post';

export const PostList = ({ posts = [], showLikes = false }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item: { comments, image, location, title, likes, isLiked } }) => (
          <Post
            comments={comments}
            image={image}
            location={location}
            title={title}
            likes={likes}
            isLiked={isLiked}
            showLikes={showLikes}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
      image: PropTypes.any.isRequired,
      title: PropTypes.string.isRequired,
      comments: PropTypes.number.isRequired,
      likes: PropTypes.number,
      location: PropTypes.string.isRequired,
      isLiked: PropTypes.bool,
    }),
  ),
  showLikes: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
