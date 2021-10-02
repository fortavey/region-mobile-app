import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import fullListArr from '../arrays/fullList';

export const DistListScreen = ({navigation}) => {

    const newArr = [];

    function addItem(title){
        newArr.push({id:title,title});
        addRegionsFromDistrict(title);
    }

    function addRegionsFromDistrict(district){
        fullListArr.forEach(el => {
            if(el.district === district) {
                el.code.forEach(code => {
                    newArr.push({id:code,name:el.name,code});
                });
            }
        })
    }

    addItem('Центральный федеральный округ');
    addItem('Северо-Западный федеральный округ');
    addItem('Южный федеральный округ');
    addItem('Северо-Кавказский федеральный округ');
    addItem('Приволжский федеральный округ');
    addItem('Уральский федеральный округ');
    addItem('Сибирский федеральный округ');
    addItem('Дальневосточный федеральный округ');
    addItem('Прочее');

    return (
        <FlatList
        data={newArr}
        renderItem={({item}) => {
            if(item.title) {
                return (
                    <View>
                        <View style={styles.distTitle}><Text>{item.title}</Text></View>
                    </View>
                )
            }else {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Item')}>
                        <View style={styles.listItem}>
                            <View style={styles.listItemNumber}>
                                <Text style={styles.listItemNumberText}>{item.code < 10 ? `0${item.code}` : item.code}</Text>
                            </View>
                            <Text style={styles.listItemText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        }}
        keyExtractor={(item) => item.id.toString()}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    distTitle: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee',
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
