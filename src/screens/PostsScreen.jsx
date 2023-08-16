import { StyleSheet } from 'react-native';
import { UserProfileInfo } from '../components/UserProfileInfo';
import { ScrollContainer } from '../components/ui/ScrollContainer';
import { PostList } from '../components/PostList';
import { posts } from '../mock/posts';
import userProfileImage from '../../assets/images/userProfile.jpg';

export default function PostsScreen() {
  return (
    <ScrollContainer>
      <UserProfileInfo
        style={styles.userProfile}
        profileImage={userProfileImage}
        username="Natali Romanova"
        email="email@example.com"
      />
      <PostList posts={posts} />
    </ScrollContainer>
  );
}

const styles = StyleSheet.create({
  userProfile: {
    marginBottom: 32,
  },
});
