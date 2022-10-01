/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from '../screens/splash';
import { HomeScreen } from '../screens/home';
import { AppHeader } from '../components/AppHeader';
import { IncomExpenseDetails } from '../screens/incomExpenseDetails';

const Stack = createStackNavigator();

const screenOptionsStyle = {
  headerTitleAlign: 'center',
  headerTitleStyle: { fontSize: 18, fontWeight: '100' },
  headerLeft: null,
};

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptionsStyle}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ header: () => <AppHeader /> }}
      />
      <Stack.Screen
        name="IncomExpenseDetails"
        component={IncomExpenseDetails}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};
