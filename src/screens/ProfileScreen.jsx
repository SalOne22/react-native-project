import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from 'firebase/auth';

import bgImage from '@/assets/images/PhotoBG.jpg';

import { ChangeableProfileImage } from '~/components/changeable/ChangeableProfileImage';
import { LogoutButton } from '~/components/buttons/LogoutButton';

import { PostList } from '~/modules/PostList';

import { Background } from '~/ui/wrappers/Background';
import { StaticModal } from '~/ui/wrappers/StaticModal';

import { posts } from '~/mock/posts';

import { auth } from '~/config';
import { uploadImage } from '~/utils';

import { selectUser, updateUser } from '~/redux/slices/authSlice';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const { picture: pictureURL, username } = useSelector(selectUser) ?? {};

  const updateProfilePicture = async (picture) => {
    const photoURL = picture && (await uploadImage('profile_images', picture.uri));

    await updateProfile(auth.currentUser, {
      photoURL,
    });

    dispatch(updateUser({ picture: photoURL }));
  };

  return (
    <Background image={bgImage}>
      <StaticModal style={styles.modal}>
        <ChangeableProfileImage
          style={styles.profileImage}
          source={pictureURL && { uri: pictureURL }}
          setSource={updateProfilePicture}
        />
        <View style={styles.logoutButton}>
          <LogoutButton />
        </View>
        <Text style={styles.header}>{username}</Text>
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
