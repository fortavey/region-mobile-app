import React from "react";
import { View, Text, StyleSheet } from "react-native"; 
import { AntDesign } from '@expo/vector-icons';

export const Navbar = ({ page, changePage }) => {

    const pressSearch = () => {
        changePage(2);
    }
    const pressBack = () => {
        changePage(1);
    }

    let title = 'Главная';
    switch(page) {
        case 1:
            title = 'Главная'; break;
        case 2:
            title = 'Поиск'; break;
        case 3:
            title = 'Список'; break;
      }

    return (
        <View style={styles.navbar}>
            <AntDesign name="arrowleft" size={24} color="white"  onPress={pressBack}/>
            <Text style={styles.text}>{ title }</Text>
            <AntDesign name="search1" size={24} color="white" onPress={pressSearch}/>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})
