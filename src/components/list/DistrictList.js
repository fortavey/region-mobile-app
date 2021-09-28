import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import distList from '../../arrays/distList';

export const DistrictList = (props) => {

    function returnRegion(arr) {
        const list = arr.map(reg => (
            <View style={styles.listItem}>
                <View style={styles.listItemNumber}>
                    <Text style={styles.listItemNumberText}>{reg.id}</Text>
                </View>
                <Text style={styles.listItemText}>{reg.name}</Text>
            </View>
        ))
        return list;
    }

    const content = distList.map(dist => {
        return (
            <View>
                <View style={styles.distTitle}>{dist.district}</View>
                {returnRegion(dist.regions)}
            </View>
        )
    })

    return (
        <View>
            { content }
        </View>
    )
}

const styles = StyleSheet.create({
    distTitle: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'silver',
        borderBottomWidth: 1
    },
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
