import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';

import PostNavigator from './PostNavigator';

import LoginScreen from '~/screens/auth/LoginScreen';
import RegistrationScreen from '~/screens/auth/RegistrationScreen';
import { auth } from '~/config';

const MainStack = createStackNavigator();

export default function MainNavigator() {
  const [isAuth, setIsAuth] = useState(false);

  onAuthStateChanged(auth, (user) => {
    setIsAuth(!!user);
  });

  if (!isAuth)
    return (
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
      </MainStack.Navigator>
    );

  return <PostNavigator />;
}
