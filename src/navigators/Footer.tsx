import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatPage from '../screens/ChatPage';
import GamePage from '../screens/GamePage';
import NewsPage from '../screens/NewsPage';

const Tab = createBottomTabNavigator();

const FooterBottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Game Board"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: '#000'},
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Register':
              iconName = 'account-plus';
              break;
            case 'Game Board':
              iconName = 'gamepad-variant';
              break;
            case 'Rank':
              iconName = 'trophy-outline';
              break;
            case 'News':
              iconName = 'newspaper-variant-outline';
              break;
            default:
              iconName = 'circle';
          }
          return <Icon name={iconName} color={color} size={size || 24} />;
        },
      })}>
      <Tab.Screen
        options={{
          tabBarButton: props => <View {...props} />,
        }}
        name="Register"
        component={GamePage}
      />
      <Tab.Screen name="Game Board" component={GamePage} />
      <Tab.Screen
        options={{
          tabBarButton: props => <View {...props} />,
        }}
        name="Rank"
        component={ChatPage}
      />
      <Tab.Screen name="News" component={NewsPage} />
    </Tab.Navigator>
  );
};

export default FooterBottomTabNav;
