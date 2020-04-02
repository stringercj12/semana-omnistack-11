import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Login from './pages/Login';

export default function Routes() {

  function auth() {
    const ongId = AsyncStorage.getItem('ongId');
    if (ongId) {
      return Incidents
    } else {
      return Login
    }
  }

  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={auth}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}