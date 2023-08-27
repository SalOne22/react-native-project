import PropTypes from 'prop-types';

import { Image, StyleSheet, Text, View } from 'react-native';

import { formatDate } from '~/utils';

export const Comment = ({ userPicture, content, timestamp, right = false }) => {
  return (
    <View style={[styles.container, right && { flexDirection: 'row-reverse' }]}>
      <Image style={styles.userPicture} source={userPicture} />
      <View
        style={[styles.commentBlock, right ? styles.commentBlockRight : styles.commentBlockLeft]}
      >
        <Text style={styles.text}>{content}</Text>
        <Text style={[styles.timestamp, right && { textAlign: 'left' }]}>
          {formatDate(timestamp)}
        </Text>
      </View>
    </View>
  );
};

Comment.propTypes = {
  userPicture: PropTypes.any,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  right: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  userPicture: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    backgroundColor: '#e8e8e8',
  },
  commentBlock: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 6,
    flexBasis: '85%',
  },
  commentBlockLeft: {
    borderTopLeftRadius: 0,
  },
  commentBlockRight: {
    borderTopRightRadius: 0,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    lineHeight: 18,
    color: '#212121',
    marginBottom: 8,
  },
  timestamp: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    textAlign: 'right',
    color: '#bdbdbd',
  },
});
