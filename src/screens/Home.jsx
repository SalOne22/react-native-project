import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import { LogoutButton } from '../components/LogoutButton';
import { IconButton } from '../components/IconButton';

const Tab = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();

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
          tabBarIcon: () => <Feather name="plus" size={24} color="#fff" />,
          tabBarIconStyle: {
            backgroundColor: '#FF6C00',
            width: 70,
            borderRadius: 20,
          },
        }}
      />
    </Tab.Navigator>
  );
}
