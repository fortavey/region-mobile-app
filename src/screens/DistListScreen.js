import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DistListComponent } from '../components/DistListComponent';
import { FullListComponent } from '../components/FullListComponent';
import { ItemScreen } from './ItemScreen';
import { MapScreen } from './MapScreen';

const Stack = createNativeStackNavigator();

export const DistListScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DistListComponent" component={DistListComponent} />
            <Stack.Screen name="FullListComponent" component={FullListComponent} />
            <Stack.Screen name="Item" component={ItemScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      );
}