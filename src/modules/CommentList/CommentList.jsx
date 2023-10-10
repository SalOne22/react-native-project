import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { Comment } from './Comment';

import { selectUser } from '~/redux/slices/authSlice';

export const CommentList = ({ comments }) => {
  const { uid } = useSelector(selectUser) ?? {};

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({ item: { userPicture, userId, content, timestamp } }) => (
          <Comment
            userPicture={userPicture}
            content={content}
            timestamp={timestamp}
            right={userId === uid}
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
