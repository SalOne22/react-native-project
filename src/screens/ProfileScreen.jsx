import { StyleSheet, Text, View } from 'react-native';

import bgImage from '@/assets/images/PhotoBG.jpg';
import userProfileImage from '@/assets/images/userProfile.jpg';

import { ChangeableProfileImage } from '~/components/changeable/ChangeableProfileImage';
import { LogoutButton } from '~/components/buttons/LogoutButton';

import { PostList } from '~/modules/PostList';

import { Background } from '~/ui/wrappers/Background';
import { StaticModal } from '~/ui/wrappers/StaticModal';

import { posts } from '~/mock/posts';

export default function ProfileScreen() {
  return (
    <Background image={bgImage}>
      <StaticModal style={styles.modal}>
        {/* Убрать source - появиться пустая картинка */}
        <ChangeableProfileImage style={styles.profileImage} source={userProfileImage} />
        <View style={styles.logoutButton}>
          <LogoutButton />
        </View>
        <Text style={styles.header}>Natali Romanova</Text>
        <PostList posts={posts} showLikes />
      </StaticModal>
    </Background>
  );
}

const styles = StyleSheet.create({
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
