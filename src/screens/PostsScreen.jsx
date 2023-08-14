import { UserProfileInfo } from '../components/UserProfileInfo';
import { ScrollContainer } from '../components/ScrollContainer';
import userProfileImage from '../../assets/images/userProfile.jpg';

export default function PostsScreen() {
  return (
    <ScrollContainer>
      <UserProfileInfo
        profileImage={userProfileImage}
        username="Natali Romanova"
        email="email@example.com"
      />
    </ScrollContainer>
  );
}
