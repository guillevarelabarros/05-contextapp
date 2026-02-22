import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { useCounterStore } from '../store/counter-store';

export type RootTabParams = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParams>();

export const BottomTabNavigator = () => {
  const { count } = useCounterStore();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: `Contador: ${count}` }}
      />
    </Tab.Navigator>
  );
};
