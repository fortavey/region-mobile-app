import React, { useState} from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/bootstrap';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import { FirstScreen } from './src/screens/FirstScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { THEME } from './src/theme';
import { FullListComponent } from './src/components/FullListComponent';
import { DistListComponent } from './src/components/DistListComponent';
import { ItemScreen } from './src/screens/ItemScreen';
import { AntDesign } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App({navigation}) {
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
    drawerActiveTintColor: THEME.MAIN_COLOR,
    drawerActiveBackgroundColor: 'silver'
  }

  const searchButton = (navigation) => {
    return (
      <AntDesign 
        onPress={() => navigation.navigate('Search')} 
        name="search1" 
        size={24} 
        color="#fff"
        style={styles.searchButton}
      />
    )
  }

  return (
  <NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen name="First" component={FirstScreen} options={({ navigation }) => ({
          ...options,
          title: 'Главная',
          headerRight: () => searchButton(navigation)
        })}/>
        <Drawer.Screen name="Search" component={SearchScreen} options={({ navigation }) => ({
          ...options,
          title: 'Поиск'
        })}/>
        <Drawer.Screen name="FullList" component={FullListComponent} options={({ navigation }) => ({
          ...options,
          title: 'Полный список',
          headerRight: () => searchButton(navigation)
        })}/>
        <Drawer.Screen name="DistList" component={DistListComponent} options={({ navigation }) => ({
          ...options,
          title: 'Список по округам',
          headerRight: () => searchButton(navigation)
        })}/>
        <Drawer.Screen name="Item" component={ItemScreen} options={({ navigation }) => ({
          ...options,
          title: 'Информация о регионе',
          headerRight: () => searchButton(navigation)
        })}/>
    </Drawer.Navigator>
  </NavigationContainer>);
}

const styles = StyleSheet.create({
  searchButton: {
    marginRight: 14
  }
});