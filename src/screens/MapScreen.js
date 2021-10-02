import React, { useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
            <Text>MapScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})