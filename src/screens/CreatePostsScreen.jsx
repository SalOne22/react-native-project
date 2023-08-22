import { StyleSheet } from 'react-native';

import { Container } from '~/ui/wrappers/Container';
import { KeyboardHandler } from '~/components/KeyboardHandler';
import { CreatePostForm } from '~/modules/CreatePostForm';

export default function CreatePostsScreen() {
  return (
    <KeyboardHandler>
      <Container>
        <CreatePostForm style={styles.createPostForm} />
      </Container>
    </KeyboardHandler>
  );
}

const styles = StyleSheet.create({
  createPostForm: {
    height: '100%',
  },
});
