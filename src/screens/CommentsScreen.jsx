import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { PostImage } from '~/ui/PostImage';
import { Container } from '~/ui/wrappers/Container';
import { CommentList } from '~/modules/CommentList';

export default function CommentsScreen() {
  const {
    params: { image, comments },
  } = useRoute();

  return (
    <Container>
      <PostImage style={styles.image} image={image} />
      <CommentList comments={comments} />
    </Container>
  );
}

const styles = StyleSheet.create({ image: { marginBottom: 32 } });
