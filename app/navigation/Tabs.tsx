import React from 'react';
import { useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import Accounts from '../screens/Accounts';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colorScheme === 'dark' ? '#1E1E1E' : '#FFFFFF',
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Accounts" component={Accounts} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
