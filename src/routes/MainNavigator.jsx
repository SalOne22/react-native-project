import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import PostNavigator from './PostNavigator';

import LoginScreen from '~/screens/auth/LoginScreen';
import RegistrationScreen from '~/screens/auth/RegistrationScreen';

import { selectIsAuthenticated } from '~/redux/slices/authSlice';

const MainStack = createStackNavigator();

export default function MainNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated)
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
