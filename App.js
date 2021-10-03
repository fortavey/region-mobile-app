import React, { useState} from 'react';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/bootstrap';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import { FirstScreen } from './src/screens/FirstScreen';
import { MainScreen } from './src/screens/MainScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { FullListScreen } from './src/screens/FullListScreen';
import { DistListScreen } from './src/screens/DistListScreen';
import { THEME } from './src/theme';

const Drawer = createDrawerNavigator();

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
    <Drawer.Navigator>
        <Drawer.Screen name="First" component={FirstScreen} options={{...options, title: ''}}/>
        <Drawer.Screen name="Main" component={MainScreen} options={{...options, title: 'Главная'}}/>
        <Drawer.Screen name="Search" component={SearchScreen} options={{...options, title: 'Поиск'}}/>
        <Drawer.Screen name="FullList" component={FullListScreen} options={{...options, title: 'Полный список'}}/>
        <Drawer.Screen name="DistList" component={DistListScreen} options={{...options, title: 'Список по округам'}}/>
    </Drawer.Navigator>
  </NavigationContainer>);
}
