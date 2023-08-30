import PropTypes from 'prop-types';

import * as ImagePicker from 'expo-image-picker';

import { AntDesign } from '@expo/vector-icons';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const ChangeableProfileImage = ({ style, source, setSource }) => {
  const setPicture = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) setSource(result.assets[0]);
  };

  const resetPicture = () => setSource(null);

  return (
    <View style={[styles.userImageContainer, style]}>
      {source && <Image style={styles.userImage} source={source} />}
      <TouchableOpacity
        style={[styles.icon, source ? styles.remove : styles.add]}
        activeOpacity={0.6}
        onPress={source ? resetPicture : setPicture}
      >
        <AntDesign name="pluscircleo" size={25} color={source ? '#e8e8e8' : '#ff6c00'} />
      </TouchableOpacity>
    </View>
  );
};

ChangeableProfileImage.propTypes = {
  style: PropTypes.object,
  source: PropTypes.any,
  setSource: PropTypes.func.isRequired,
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
