import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import fullListArr from '../arrays/fullList';
import { BottomTabs } from '../components/BottomTabs';

export const FullListScreen = ({navigation}) => {

    const newArr = fullListArr.reduce((acc,el) => {
        el.code.forEach(code => {
            acc.push({id:code,name:el.name,realId:el.id,code});
        });
        return acc;
    }, []);

    return (
        <View>
            <FlatList
                data={newArr}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Item', {...fullListArr.filter(el => el.id == item.realId)})}>
                        <View style={styles.listItem}>
                            <View style={styles.listItemNumber}>
                                <Text style={styles.listItemNumberText}>{item.code < 10 ? `0${item.code}` : item.code}</Text>
                            </View>
                            <Text style={styles.listItemText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <BottomTabs />
        </View>
    )
}

const styles = StyleSheet.create({
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
