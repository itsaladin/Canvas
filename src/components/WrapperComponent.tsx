import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import ChatPage from '../screens/ChatPage';

const ChatScreenWrapper = () => {
  const colorScheme = useColorScheme();

  useFocusEffect(
    React.useCallback(() => {
      // Set StatusBar style when ChatPage is focused
      if (colorScheme !== 'dark') {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('#f5f5f5');
      } else {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor('black');
      }

      // Reset StatusBar style when ChatPage is unfocused
      return () => {
        if (colorScheme !== 'dark') {
          StatusBar.setBarStyle('light-content');
          StatusBar.setBackgroundColor('black');
        } else {
          StatusBar.setBarStyle('dark-content');
          StatusBar.setBackgroundColor('#f5f5f5');
        }
      };
    }, [colorScheme]),
  );

  return <ChatPage />;
};

export default ChatScreenWrapper;
