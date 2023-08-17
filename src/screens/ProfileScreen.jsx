import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import bgImage from '@/assets/images/PhotoBG.jpg';
import userProfileImage from '@/assets/images/userProfile.jpg';
import { PostList } from '~/components/PostList';
import { ChangeableProfileImage } from '~/components/ChangeableProfileImage';
import { posts } from '~/mock/posts';
import { LogoutButton } from '~/ui/LogoutButton';
import { StaticModal } from '~/ui/StaticModal';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={bgImage}>
        <StaticModal style={styles.modal}>
          {/* Убрать source - появиться пустая картинка */}
          <ChangeableProfileImage style={styles.profileImage} source={userProfileImage} />
          <View style={styles.logoutButton}>
            <LogoutButton />
          </View>
          <Text style={styles.header}>Natali Romanova</Text>
          <PostList posts={posts} showLikes />
        </StaticModal>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    paddingTop: 92,
    paddingBottom: 0,
    height: '80%',
  },
  profileImage: {
    marginBottom: 32,
    position: 'absolute',
  },
  logoutButton: {
    position: 'absolute',
    top: 22,
    right: 16,
  },
  header: {
    color: '#212121',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    letterSpacing: 0.3,
    marginBottom: 33,
  },
});
