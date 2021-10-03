import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FullListComponent } from '../components/FullListComponent';
import { DistListComponent } from '../components/DistListComponent';
import { ItemScreen } from './ItemScreen';
import { MapScreen } from './MapScreen';

const Stack = createNativeStackNavigator();

export const FullListScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FullListComponent" component={FullListComponent} />
            <Stack.Screen name="DistListComponent" component={DistListComponent} />
            <Stack.Screen name="Item" component={ItemScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      );
}