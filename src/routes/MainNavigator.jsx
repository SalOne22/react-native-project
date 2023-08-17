import { createStackNavigator } from '@react-navigation/stack';

import HomeNavigator from './HomeNavigator';

import LoginScreen from '~/screens/auth/LoginScreen';
import RegistrationScreen from '~/screens/auth/RegistrationScreen';

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Home" component={HomeNavigator} />
    </MainStack.Navigator>
  );
}
