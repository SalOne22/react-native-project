import { ScrollView, StyleSheet } from 'react-native';
import { UserProfileInfo } from '../components/UserProfileInfo';
import userProfileImage from '../../assets/images/userProfile.jpg';

export default function PostsScreen() {
  return (
    <ScrollView style={styles.container}>
      <UserProfileInfo
        profileImage={userProfileImage}
        username="Natali Romanova"
        email="email@example.com"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});
