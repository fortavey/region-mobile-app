import React, { useState } from "react";
import {View, Text, StyleSheet} from 'react-native';
import { THEME } from "../theme";

export const Number = ({ number, isSearch }) => {

    return (
        <View style={styles.number}>
            <View style={{height:'50%',alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'black', fontSize:24}}>{number}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center',height:'50%'}}>
                <Text style={{marginRight:10,fontSize:18}}>RUS</Text>
                <View style={styles.flag}>
                    <View style={{backgroundColor:'#fff',height:'33%'}} />
                    <View style={{backgroundColor:'blue',height:'33%'}} />
                    <View style={{backgroundColor:'red',height:'33%'}} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    number: {
        width: 150,
        height: 75,
        borderRadius: 20,
        backgroundColor: 'white',
        marginRight: 'auto',
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 3, height: 3 },
        elevation: 8,
        borderWidth: 2,
        borderColor: THEME.MAIN_COLOR
    },
    flag: {
        width: 30,
        height: 20,
        borderStyle: 'solid',
        borderWidth: 1
    }
});