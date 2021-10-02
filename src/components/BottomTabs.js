import React, { useState } from "react";
import {View, Text, StyleSheet} from 'react-native';
import { THEME } from "../theme";

export const BottomTabs = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.item}><Text style={styles.itemText}>Полный список</Text></View>
            <View style={styles.item}><Text style={styles.itemText}>Список по округам</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.MAIN_COLOR,
        flexDirection: 'row'
    },
    item: {
        width: '50%',
        borderColor: 'silver',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    itemText: {
        color: '#fff'
    }
});