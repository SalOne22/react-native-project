import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import PostsScreen from './PostsScreen';
import { LogoutButton } from '../components/LogoutButton';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={{
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

        tabBarStyle: {
          shadowColor: 'rgba(0 0 0 / 0.3)',
          shadowOffset: '0px -0.5px 0px 0px',
          height: 58,
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          padding: 8,
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: 'Публікації',
          headerRight: () => <LogoutButton />,
          headerRightContainerStyle: {
            paddingVertical: 10,
            right: 16,
          },
          tabBarIcon: () => (
            <Feather name="grid" size={24} color="rgba(33 33 33 / 0.8)" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
