import { View, Text, StyleSheet } from 'react-native';

import { ProfileImage } from '~/ui/ProfileImage';

export const UserProfileInfo = ({ style, profileImage, username, email }) => {
  return (
    <View style={[styles.container, style]}>
      <ProfileImage source={profileImage} />
      <View>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  username: {
    color: '#212121',
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
  },
  email: {
    color: 'rgba(33 33 33 / 0.8)',
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
  },
});
