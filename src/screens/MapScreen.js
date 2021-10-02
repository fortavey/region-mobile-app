import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export const MapScreen = ({}) => {
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