import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';

import postImage from '@/assets/images/postImage.jpg';

import { ChangeablePostImage } from '~/components/changeable/ChangeablePostImage';
import { GhostInput } from '~/components/GhostInput';
import { DeleteButton } from '~/components/buttons/DeleteButton';

import { Button } from '~/ui/buttons/Button';
import { ErrorText } from '~/ui/ErrorText';

export const CreatePostForm = ({ style }) => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      title: '',
      location: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigation.navigate('Home');
  };

  return (
    <View style={style}>
      {/* Убрать source - появиться пустая картинка */}
      <ChangeablePostImage style={styles.changeableImage} source={postImage} />

      <View style={styles.topInput}>
        <Controller
          control={control}
          rules={{ required: "Це поле - обов'язкове" }}
          render={({ field: { onChange, value } }) => (
            <GhostInput accent placeholder="Назва..." onChangeText={onChange} value={value} />
          )}
          name="title"
        />
        {errors.title && <ErrorText text={errors.title.message} />}
      </View>

      <View style={styles.bottomInput}>
        <Controller
          control={control}
          rules={{ required: "Це поле - обов'язкове" }}
          render={({ field: { onChange, value } }) => (
            <GhostInput
              placeholder="Місцевість..."
              icon={<Feather name="map-pin" size={24} color="#dbdbdb" />}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="location"
        />
        {errors.location && <ErrorText text={errors.location.message} />}
      </View>

      <Button
        style={styles.submitButton}
        title="Опублікувати"
        disabled={!isValid}
        onPress={handleSubmit(onSubmit)}
      />
      <DeleteButton style={styles.deleteButton} onPress={() => reset()} />
    </View>
  );
};

CreatePostForm.propTypes = {
  style: PropTypes.object,
};

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
  submitButton: {
    marginBottom: 32,
  },
  deleteButton: {
    marginTop: 'auto',
    alignSelf: 'center',
  },
});
