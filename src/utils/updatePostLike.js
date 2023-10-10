import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

import { db } from '~/config';

export const updatePostLike = async (id, like = true, userId) => {
  await updateDoc(doc(db, 'posts', id), {
    likes: like ? arrayUnion(userId) : arrayRemove(userId),
  });
};
