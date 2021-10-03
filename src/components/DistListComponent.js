import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import fullListArr from '../arrays/fullList';
import { THEME } from "../theme";
import { BottomTabs } from './BottomTabs';


export const DistListComponent = ({navigation}) => {

    const newArr = [];

    function addItem(title){
        newArr.push({id:title,title});
        addRegionsFromDistrict(title);
    }

    function addRegionsFromDistrict(district){
        fullListArr.forEach(el => {
            if(el.district === district) {
                el.code.forEach(code => {
                    newArr.push({id:code,name:el.name,realId:el.id,code});
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
        <View style={{flex:1}}>
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
                        <TouchableOpacity onPress={() => navigation.navigate('Item', {...fullListArr.filter(el => el.id == item.realId)})}>
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
            <BottomTabs navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    distTitle: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee',
        borderWidth: 4,
        borderColor: THEME.MAIN_COLOR

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
