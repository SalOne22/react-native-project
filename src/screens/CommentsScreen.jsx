import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { CommentList } from '~/modules/CommentList';
import { PostCommentForm } from '~/modules/PostCommentForm';

import { PostImage } from '~/ui/PostImage';
import { Container } from '~/ui/wrappers/Container';

import { usePost } from '~/hooks/usePost';

export default function CommentsScreen() {
  const {
    params: { id },
  } = useRoute();

  const post = usePost(id);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={styles.container}>
        <PostImage style={styles.image} image={post?.image} />
        <CommentList comments={post?.comments} />
        <PostCommentForm postId={id} />
      </Container>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 16 },
  image: { marginBottom: 32 },
});
