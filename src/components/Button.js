import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export const Button = ({ title, style }) => {
  return (
    <TouchableOpacity style={style} activeOpacity={0.75}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff6c00',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
