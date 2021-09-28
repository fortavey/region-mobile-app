import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"; 
import { DistrictList } from "./list/DistrictList";
import { FullList } from "./list/FullList";

export const List = (props) => {

    const [listId, setListId] = useState(1);

    let content = (<FullList />);
    if(listId == 1) {
        content = (<FullList />);
    }else if(listId == 2) {
        content = (<DistrictList />);
    }

    const setFullList = () => {
        setListId(1);
    }

    const setDistList = () => {
        setListId(2);
    }

    return (
        <View style={styles.list}>
            <View style={styles.topListNavigation}>
                <TouchableOpacity style={styles.topListNavigationItem} onPress={setFullList}>
                    <Text>Весь список</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topListNavigationItem} onPress={setDistList}>
                    <Text>По округам</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.topListBottomBorder}>
                <View style={listId == 1 ? {backgroundColor:'blue',flex:1} : {backgroundColor:'grey',flex:1}}></View>
                <View style={listId == 2 ? {backgroundColor:'blue',flex:1} : {backgroundColor:'grey',flex:1}}></View>
            </View>
            <View style={styles.listWrap}>
                { content }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    topListNavigation: {
        width: '100%',
        height: 40,
        flexDirection: 'row'
    },
    topListNavigationItem: {
        width: '50%',
        backgroundColor: 'silver',
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topListBottomBorder: {

    },
    listWrap: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topListBottomBorder: {
        flexDirection: 'row',
        height: 3
    }
})
