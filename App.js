import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/bootstrap';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import { FirstScreen } from './src/screens/FirstScreen';
import { MainScreen } from './src/screens/MainScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { FullListScreen } from './src/screens/FullListScreen';
import { DistListScreen } from './src/screens/DistListScreen';
import { ItemScreen } from './src/screens/ItemScreen';
import { MapScreen } from './src/screens/MapScreen';

import { THEME } from './src/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if(!isReady) {
    <AppLoading 
      startAsync={bootstrap}
      onFinish={() => setIsReady(true)}
      onError={err => console.log(err)}
    />
  }

  const options = {
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR,
    },
    headerTintColor: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
  }

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} options={{...options, title: 'Поиск'}}/>
      <Stack.Screen name="First" component={FirstScreen} options={{...options, title: 'Первый экран'}}/>
      <Stack.Screen name="Main" component={MainScreen} options={{...options, title: 'Главная'}}/>
      <Stack.Screen name="FullList" component={FullListScreen} options={{...options, title: 'Полный список'}}/>
      <Stack.Screen name="DistList" component={DistListScreen} options={{...options, title: 'Полный список'}}/>
      <Stack.Screen name="Item" component={ItemScreen} options={{...options, title: 'Регион'}}/>
      <Stack.Screen name="Map" component={MapScreen} options={{...options, title: 'Карта'}}/>
    </Stack.Navigator>
  </NavigationContainer>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#276ad6'
  },
});