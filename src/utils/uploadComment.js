import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { db } from '~/config';

export const uploadComment = async (id, user, comment) => {
  const postDocRef = await addDoc(collection(db, 'comments'), {
    postId: id,
    userPicture: user.picture,
    userId: user.uid,
    content: comment,
    timestamp: serverTimestamp(),
  });

  return postDocRef.id;
};
