import { useState, useEffect } from 'react';
import { collection, onSnapshot, getCountFromServer, query, where } from 'firebase/firestore';

import { db } from '~/config';

export const usePosts = (field, filter) => {
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

            return { id: doc.id, ...doc.data(), comments: snapshot.data().count };
          }),
        );
        setPosts(posts);
      },
    );

    return unsubscribe;
  }, []);

  return posts;
};
