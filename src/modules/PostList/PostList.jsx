import PropTypes from 'prop-types';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { Post } from './Post';

export const PostList = ({ posts = [], showLikes = false }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({
          item: { id, comments, image, location, geolocation, title, likes, isLiked },
        }) => (
          <Post
            id={id}
            comments={comments}
            image={image}
            location={location}
            geolocation={geolocation}
            title={title}
            likes={likes}
            isLiked={isLiked}
            showLikes={showLikes}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  showLikes: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
