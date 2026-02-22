
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { BottomTabNavigator } from './presentation/navigators';

export const Main = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};