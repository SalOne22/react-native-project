import PropTypes from 'prop-types';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';

import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { uploadComment } from '~/utils/uploadComment';
import { selectUser } from '~/redux/slices/authSlice';

export const PostCommentForm = ({ style, postId }) => {
  const user = useSelector(selectUser) ?? {};
  const [comment, setComment] = useState('');

  const onSubmit = () => {
    uploadComment(postId, user, comment.trim());
    setComment('');
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder="Коментувати..."
        placeholderTextColor="#bdbdbd"
        value={comment}
        onChangeText={setComment}
      />
      <View style={styles.submitButtonWrapper}>
        <TouchableOpacity style={styles.submitButton} activeOpacity={0.6} onPress={onSubmit}>
          <Feather name="arrow-up" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

PostCommentForm.propTypes = {
  style: PropTypes.object,
  postId: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    fontFamily: 'Inter-Medium',
    backgroundColor: '#f6f6f6',
    borderColor: '#e8e8e8',
    color: '#212121',
    borderWidth: 1,
    borderRadius: 999,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 15,
  },
  submitButtonWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 8,
    paddingVertical: 8,
  },
  submitButton: {
    backgroundColor: '#ff6c00',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 999,
  },
});
