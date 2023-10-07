import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { ProfileImage } from '~/ui/ProfileImage';

import { selectUser } from '~/redux/slices/authSlice';

export const UserProfileInfo = ({ style }) => {
  const { username, email, picture } = useSelector(selectUser) ?? {};

  return (
    <View style={[styles.container, style]}>
      <ProfileImage source={{ uri: picture }} />
      <View>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

UserProfileInfo.propTypes = {
  style: PropTypes.object,
  profileImage: PropTypes.any,
  username: PropTypes.string,
  email: PropTypes.string,
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
