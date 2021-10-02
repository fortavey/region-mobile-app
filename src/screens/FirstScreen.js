import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

export const FirstScreen = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <Text>FirstScreen</Text>
            <Button title="Главная" onPress={() => navigation.navigate('Main')}/>
            <Button title="Поиск" onPress={() => navigation.navigate('Search')}/>
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