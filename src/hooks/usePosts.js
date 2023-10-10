import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

import { db } from '~/config';

export const usePosts = (field, filter) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsCollection = collection(db, 'posts');

    const unsubscribe = onSnapshot(
      field && filter ? query(postsCollection, where(field, '==', filter)) : postsCollection,
      (snapshot) => {
        const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPosts(posts);
      },
    );

    return unsubscribe;
  }, []);

  return posts;
};
