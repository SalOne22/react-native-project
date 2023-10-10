import { addDoc, collection } from 'firebase/firestore';

import { uploadImage } from './uploadImage';

import { db } from '~/config';

export const uploadPost = async ({ owner, image, title, geolocation, location }) => {
  const imageUrl = await uploadImage('posts', image.uri);
  const postDocRef = await addDoc(collection(db, 'posts'), {
    owner,
    image: imageUrl,
    title: title.trim(),
    likes: [],
    geolocation: {
      latitude: geolocation.latitude,
      longitude: geolocation.longitude,
    },
    location: location.trim(),
  });

  return postDocRef.id;
};
