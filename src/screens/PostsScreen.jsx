import { StyleSheet } from 'react-native';

import { UserProfileInfo } from '~/components/UserProfileInfo';

import { PostList } from '~/modules/PostList';

import { Container } from '~/ui/wrappers/Container';

import { usePosts } from '~/hooks';

export default function PostsScreen() {
  const posts = usePosts();

  return (
    <Container style={styles.container}>
      <UserProfileInfo style={styles.userProfile} />
      <PostList posts={posts} showLikes />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  userProfile: {
    marginBottom: 32,
  },
});
