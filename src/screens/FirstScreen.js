import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { THEME } from '../theme';

export const FirstScreen = ({}) => {
    return (
        <View style={styles.main}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/adaptive-icon.png')}
            />
            <Text style={{color:'#fff',fontSize:24,textAlign:'center'}}>"Регионы - Все Автономера России"</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.MAIN_COLOR
    },
    tinyLogo: {
        width: 200,
        height: 200
    }
})