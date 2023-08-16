import { StyleSheet } from 'react-native';
import { UserProfileInfo } from '../components/UserProfileInfo';
import { Container } from '../components/ui/Container';
import { PostList } from '../components/PostList/PostList';
import { posts } from '../mock/posts';
import userProfileImage from '../../assets/images/userProfile.jpg';

export default function PostsScreen() {
  return (
    <Container>
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
  userProfile: {
    marginBottom: 32,
  },
});
