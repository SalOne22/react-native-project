import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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
          snapshot.docs.map(async (snapshot) => {
            const unsubscribe = onSnapshot(
              query(collection(db, 'comments'), where('postId', '==', snapshot.id)),
              (commentsSnapshot) => {
                const postToUpdate = posts.find((post) => post.id === snapshot.id);
                setPosts((prev) =>
                  prev.map((post) => {
                    if (post.id === postToUpdate.id) post.comments = commentsSnapshot.docs.length;
                    return post;
                  }),
                );
              },
            );

            const { likes, ...data } = snapshot.data();

            return {
              id: snapshot.id,
              ...data,
              comments: 0,
              likes: likes.length,
              isLiked: likes.includes(uid),
              unsubscribe,
            };
          }),
        );
        setPosts(posts);
      },
    );

    return () => {
      unsubscribe();
      posts.forEach((post) => post.unsubscribe());
    };
  }, []);

  return posts;
};
