import { StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import { ChangeablePostImage } from '../components/form/ChangeablePostImage';
import { GhostInput } from '../components/form/GhostInput';
import { Button } from '~/ui/Button';
import { DeleteButton } from '../components/form/DeleteButton';
import { Container } from '../components/ui/Container';
import postImage from '../../assets/images/postImage.jpg';

export default function CreatePostsScreen() {
  const { control, handleSubmit, reset } = useForm({
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
