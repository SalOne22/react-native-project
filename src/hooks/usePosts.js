import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, getCountFromServer, query, where } from 'firebase/firestore';

import { db } from '~/config';
import { selectUser } from '~/redux/slices/authSlice';

export const usePosts = (field, filter) => {
  const { uid } = useSelector(selectUser) ?? {};
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsCollection = collection(db, 'posts');

    const unsubscribe = onSnapshot(
      field && filter ? query(postsCollection, where(field, '==', filter)) : postsCollection,
      async (snapshot) => {
        const posts = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const snapshot = await getCountFromServer(
              query(collection(db, 'comments'), where('postId', '==', doc.id)),
            );

            const { likes, ...data } = doc.data();

            return {
              id: doc.id,
              ...data,
              comments: snapshot.data().count,
              likes: likes.length,
              isLiked: likes.includes(uid),
            };
          }),
        );
        setPosts(posts);
      },
    );

    return unsubscribe;
  }, []);

  return posts;
};
