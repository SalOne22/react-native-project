import { StyleSheet } from 'react-native';
import { UserProfileInfo } from '~/components/UserProfileInfo';
import { Container } from '~/ui/Container';
import { PostList } from '~/components/PostList';
import { posts } from '~/mock/posts';
import userProfileImage from '@/assets/images/userProfile.jpg';

export default function PostsScreen() {
  return (
    <Container style={styles.container}>
      <UserProfileInfo
        style={styles.userProfile}
        profileImage={userProfileImage}
        username="Natali Romanova"
        email="email@example.com"
      />
      <PostList posts={posts} />
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
