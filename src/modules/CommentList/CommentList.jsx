import PropTypes from 'prop-types';

import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { Comment } from './Comment';

export const CommentList = ({ comments }) => {
  const currentUserId = 202; // TODO: Здесь должен быть актуальный id

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({ item: { userPicture, userId, content, timestamp } }) => (
          <Comment
            userPicture={userPicture}
            content={content}
            timestamp={timestamp}
            right={userId === currentUserId}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
