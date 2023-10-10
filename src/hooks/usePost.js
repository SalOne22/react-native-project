import { useState, useEffect } from 'react';
import { onSnapshot, doc, collection, query, where, orderBy } from 'firebase/firestore';

import { db } from '~/config';

export const usePost = (id) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const unsubscribePosts = onSnapshot(doc(db, 'posts', id), (doc) => {
      setPost({ ...doc.data() });
    });

    const unsubscribeComments = onSnapshot(
      query(collection(db, 'comments'), where('postId', '==', id), orderBy('timestamp')),
      (snapshot) => {
        setPost((prev) => ({
          ...prev,
          comments: snapshot.docs.map((doc) => {
            const data = { id: doc.id, ...doc.data() };

            data.timestamp = data.timestamp?.toMillis();

            return data;
          }),
        }));
      },
    );

    return () => {
      unsubscribePosts();
      unsubscribeComments();
    };
  }, []);

  return post;
};
