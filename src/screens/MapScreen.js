import React, { useEffect } from "react";
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export const MapScreen = ({ route, navigation }) => {

    const item = route.params;
    console.log(navigation);

    useEffect(() => {
        navigation.setOptions({
            title: 'Карта',
        })
    }, []);

    return (
        <WebView 
            style={styles.container}
            source={{ uri: 'https://fortavey.ru/map/index.html' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})