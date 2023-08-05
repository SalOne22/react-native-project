import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const LinkButton = ({ style, textStyle, title }) => {
  return (
    <TouchableOpacity style={style} activeOpacity={0.6}>
      <Text style={[styles.link, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: { color: '#1b4371', fontFamily: 'Roboto-Regular' },
});
