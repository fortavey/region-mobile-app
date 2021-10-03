import React, { useEffect } from "react";
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

export const MapScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <AntDesign style={{marginRight:10}} name="search1" size={24} color="white" onPress={() => navigation.navigate('Search')}/>
            ),
        })
    }, []);

    return (
        <View style={styles.main}>
            <WebView 
                style={styles.container}
                source={{ uri: 'https://fortavey.ru/map/index.html' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1
    }
})