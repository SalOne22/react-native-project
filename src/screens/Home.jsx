import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { LogoutButton } from '~/ui/LogoutButton';
import { IconButton } from '~/ui/IconButton';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Posts"
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

        headerLeft: () => (
          <IconButton
            icon={<Feather name="arrow-left" size={24} color="#000" />}
            onPress={() => navigation.navigate('Posts')}
          />
        ),
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
