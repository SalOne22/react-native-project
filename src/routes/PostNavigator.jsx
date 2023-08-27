import PropTypes from 'prop-types';

import { createStackNavigator } from '@react-navigation/stack';

import CommentsScreen from '~/screens/CommentsScreen';
import MapScreen from '~/screens/MapScreen';

const Stack = createStackNavigator();

export default function PostNavigator({ defaultScreen, defaultScreenOptions }) {
  return (
    <Stack.Navigator
      initialRouteName="Default"
      screenOptions={() => ({
        headerStyle: {
          shadowColor: 'rgba(0 0 0 / 0.3)',
          shadowOffset: '0px 0.5px 0px 0px',
        },

        headerTitleAlign: 'center',
        headerTintColor: '#212121',
        headerTitleStyle: {
          fontSize: 17,
          fontFamily: 'Roboto-Medium',
          lineHeight: 22,
          letterSpacing: -0.408,
        },
        headerTitleContainerStyle: {
          paddingVertical: 11,
        },
      })}
    >
      <Stack.Screen name="Default" component={defaultScreen} options={defaultScreenOptions} />
      <Stack.Screen name="Comments" component={CommentsScreen} options={{ title: 'Коментарі' }} />
      <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Мапа' }} />
    </Stack.Navigator>
  );
}

PostNavigator.propTypes = {
  defaultScreen: PropTypes.elementType.isRequired,
  defaultScreenOptions: PropTypes.object,
};
