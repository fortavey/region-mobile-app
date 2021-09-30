import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"; 

export const Main = ({ changePage, title }) => {

    const pressSearch = () => {
        changePage(2);
    }
    const pressList = () => {
        changePage(3);
    }

    return (
        <View style={styles.main}>
            <View style={styles.mainTitle}>
                <Text style={styles.mainTitleText}>Автомобильные коды регионов России { title }</Text>
            </View>
            <TouchableOpacity style={styles.mainListItem} onPress={pressSearch}>
                <Text style={styles.mainListItemText}>Поиск</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainListItem}>
                <Text style={styles.mainListItemText} onPress={pressList}>Список</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainTitle: {
        marginBottom: 30
    },
    mainTitleText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
    },
    mainListItem: {
        width: 200,
        height: 50,
        borderWidth: 1,
        borderColor: 'silver',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    mainListItemText: {
        color: '#fff',
        fontSize: 20
    }
})
