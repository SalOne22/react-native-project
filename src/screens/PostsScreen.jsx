import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

import { db } from '~/config';

import { UserProfileInfo } from '~/components/UserProfileInfo';

import { PostList } from '~/modules/PostList';

import { Container } from '~/ui/wrappers/Container';

export default function PostsScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(posts);
    });

    return unsubscribe;
  }, []);

  return (
    <Container style={styles.container}>
      <UserProfileInfo style={styles.userProfile} />
      <PostList posts={posts} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  userProfile: {
    marginBottom: 32,
  },
});
