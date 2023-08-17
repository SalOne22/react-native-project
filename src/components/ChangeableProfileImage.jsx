import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { View, Image, StyleSheet } from 'react-native';

export const ChangeableProfileImage = ({ style, source }) => {
  return (
    <View style={[styles.userImageContainer, style]}>
      {source && <Image style={styles.userImage} source={source} />}
      <AntDesign
        style={[styles.icon, source ? styles.remove : styles.add]}
        name="pluscircleo"
        size={25}
        color={source ? '#e8e8e8' : '#ff6c00'}
      />
    </View>
  );
};

ChangeableProfileImage.propTypes = {
  style: PropTypes.object,
  source: PropTypes.any,
};

const styles = StyleSheet.create({
  userImageContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#f6f6f6',
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: -60,
    position: 'relative',
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  icon: {
    position: 'absolute',
    bottom: 14,
    right: -12,
    borderRadius: 25 / 2,
    backgroundColor: '#fff',
    transform: {
      perspective: 1000,
    },
  },
  add: {
    transform: [{ rotate: '0deg' }],
  },
  remove: {
    transform: [{ rotate: '45deg' }],
  },
});