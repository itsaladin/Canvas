import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import ChatScreenWrapper from './components/WrapperComponent';
import FooterBottomTabNav from './navigators/Footer';

const Stack = createStackNavigator();
const App = () => {
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (colorScheme === 'dark') {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('black');
    } else {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#f5f5f5');
    }
  }, [colorScheme]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen
          name="MainTabs"
          component={FooterBottomTabNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Chat"
          component={ChatScreenWrapper}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
