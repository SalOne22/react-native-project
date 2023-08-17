import { StyleSheet } from 'react-native';

import userProfileImage from '@/assets/images/userProfile.jpg';

import { UserProfileInfo } from '~/components/UserProfileInfo';

import { PostList } from '~/modules/PostList';

import { Container } from '~/ui/Container';

import { posts } from '~/mock/posts';

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
