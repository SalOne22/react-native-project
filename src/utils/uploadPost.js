import { addDoc, collection } from 'firebase/firestore/lite';

import { uploadImage } from './uploadImage';

import { db } from '~/config';

export const uploadPost = async ({ image, title, geolocation, location }) => {
  const imageUrl = await uploadImage('posts', image.uri);
  const postDocRef = await addDoc(collection(db, 'posts'), {
    image: imageUrl,
    title: title.trim(),
    comments: [],
    likes: 0,
    geolocation: {
      latitude: geolocation.latitude,
      longitude: geolocation.longitude,
    },
    location: location.trim(),
  });

  return postDocRef.id;
};
