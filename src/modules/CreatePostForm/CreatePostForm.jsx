import PropTypes from 'prop-types';

import * as Location from 'expo-location';

import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';

import { ChangeablePostImage } from '~/components/changeable/ChangeablePostImage';
import { GhostInput } from '~/components/inputs/GhostInput';
import { DeleteButton } from '~/components/buttons/DeleteButton';

import { Button } from '~/ui/buttons/Button';
import { ErrorText } from '~/ui/typography/ErrorText';

import { selectUser } from '~/redux/slices/authSlice';
import { uploadPost } from '~/utils';

// FIXME: Надо нормально обрабатывать ошибки
export const CreatePostForm = ({ style }) => {
  const { uid } = useSelector(selectUser) ?? {};
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      title: '',
      location: '',
      image: null,
      geolocation: null,
    },
  });

  const onSubmit = async (data) => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setError('geolocation', {
        type: 'required',
        message: 'У доступі до місцезнаходження відмовлено',
      });
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync();

    try {
      const postId = await uploadPost({ ...data, geolocation: coords, owner: uid });

      console.log(postId);
      reset();
      navigation.navigate('Posts');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={style}>
      <View style={styles.changeableImage}>
        <Controller
          control={control}
          rules={{ required: "Фото - обов'язкове" }}
          render={({ field: { value } }) => (
            <ChangeablePostImage
              image={value}
              setImage={(image) => setValue('image', image, { shouldValidate: true })}
              error={errors.image?.message}
            />
          )}
          name="image"
        />
      </View>

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
        {errors.geolocation && <ErrorText text={errors.geolocation.message} />}
      </View>

      <Button
        style={styles.submitButton}
        title="Опублікувати"
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
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
