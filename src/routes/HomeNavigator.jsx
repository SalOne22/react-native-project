import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CreatePostsScreen from '~/screens/CreatePostsScreen';
import PostsScreen from '~/screens/PostsScreen';
import ProfileScreen from '~/screens/ProfileScreen';

import { GoBackButton } from '~/components/buttons/GoBackButton';
import { LogoutButton } from '~/components/buttons/LogoutButton';

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      backBehavior="history"
      screenOptions={({ route }) => ({
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

        headerLeft: () => <GoBackButton />,
        headerLeftContainerStyle: {
          left: 16,
        },

        tabBarStyle: {
          shadowColor: 'rgba(0 0 0 / 0.3)',
          shadowOffset: '0px -0.5px 0px 0px',
          height: 58,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let name;

          switch (route.name) {
            case 'Posts':
              name = 'grid';
              break;
            case 'CreatePost':
              name = 'plus';
              break;
            case 'Profile':
              name = 'user';
              break;
          }

          return (
            <Feather
              style={{
                backgroundColor: focused && '#FF6C00',
                width: 70,
                borderRadius: 20,
                paddingVertical: 8,
                textAlign: 'center',
              }}
              name={name}
              size={24}
              color={focused ? '#fff' : '#212121'}
            />
          );
        },
      })}
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
          headerLeft: null,
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Профіль',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
