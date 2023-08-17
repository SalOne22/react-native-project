import { Feather } from '@expo/vector-icons';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import postImage from '@/assets/images/postImage.jpg';
import { ChangeablePostImage } from '~/components/ChangeablePostImage';
import { DeleteButton } from '~/components/DeleteButton';
import { GhostInput } from '~/components/GhostInput';
import { Button } from '~/ui/Button';
import { Container } from '~/ui/Container';

export default function CreatePostsScreen() {
  const navigation = useNavigation();

  const { handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      location: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigation.navigate('Home');
  };

  return (
    <Container>
      {/* Убрать source - появиться пустая картинка */}
      <ChangeablePostImage style={styles.changeableImage} source={postImage} />

      <GhostInput accent style={styles.topInput} placeholder="Назва..." />
      <GhostInput
        style={styles.bottomInput}
        placeholder="Місцевість..."
        icon={<Feather name="map-pin" size={24} color="#dbdbdb" />}
      />

      <Button title="Опублікувати" disabled onPress={handleSubmit(onSubmit)} />
      <DeleteButton style={styles.deleteButton} onPress={() => reset()} />
    </Container>
  );
}

const styles = StyleSheet.create({
  changeableImage: {
    marginBottom: 32,
  },
  topInput: {
    marginBottom: 16,
  },
  bottomInput: {
    marginBottom: 32,
  },
  deleteButton: {
    marginTop: 'auto',
    alignSelf: 'center',
  },
});
