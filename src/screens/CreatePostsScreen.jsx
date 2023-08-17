import { StyleSheet } from 'react-native';
import { CreatePostForm } from '~/modules/CreatePostForm';

import { Container } from '~/ui/Container';

export default function CreatePostsScreen() {
  return (
    <Container>
      <CreatePostForm style={styles.createPostForm} />
    </Container>
  );
}

const styles = StyleSheet.create({
  createPostForm: {
    height: '100%',
  },
});
