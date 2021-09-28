import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import distList from '../../arrays/distList';

export const DistrictList = (props) => {

    function returnRegion(arr) {
        const list = arr.map(reg => (
            <View style={styles.listItem} key={Math.random().toString()}>
                <View style={styles.listItemNumber}>
                    <Text style={styles.listItemNumberText}>{reg.id}</Text>
                </View>
                <Text style={styles.listItemText}>{reg.name}</Text>
            </View>
        ))
        return list;
    }

    return (
        <FlatList
        data={distList}
        renderItem={({item}) => (
            <View>
                <View style={styles.distTitle}><Text>{item.district}</Text></View>
                {returnRegion(item.regions)}
            </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        >
        </FlatList>
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
        height: 50,
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
