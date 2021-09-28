import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import fullListArr from '../../arrays/fullList';

export const FullList = (props) => {

    return (
        <FlatList
            data={fullListArr}
            renderItem={({item}) => (
                <View style={styles.listItem}>
                    <View style={styles.listItemNumber}>
                        <Text style={styles.listItemNumberText}>{item.id}</Text>
                    </View>
                    <Text style={styles.listItemText}>{item.name}</Text>
                </View>
            )}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderBottomWidth: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 15
    },
    listItemNumber: {
        width: 40,
        height: 30,
        borderWidth: 2,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItemNumberText: {
        fontSize: 18
    }
})
