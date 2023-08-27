import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { PostImage } from '~/ui/PostImage';
import { Container } from '~/ui/wrappers/Container';
import { CommentList } from '~/modules/CommentList';
import { PostCommentForm } from '~/modules/PostCommentForm';

export default function CommentsScreen() {
  const {
    params: { image, comments },
  } = useRoute();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={styles.container}>
        <PostImage style={styles.image} image={image} />
        <CommentList comments={comments} />
        <PostCommentForm />
      </Container>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 16 },
  image: { marginBottom: 32 },
});
