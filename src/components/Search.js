import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import regionList from '../arrays/searchList';

export const Search = ({ changePage }) => {
    const [number, setNumber] = useState('45');
    const [render, setRender] = useState('');

    useEffect(() => {
        const currentRegion = regionList.filter(reg => reg.id == number);
        if(number.length) {
            currentRegion.length ? setRender(currentRegion[0].name) : setRender('Ничего не найдено');
        }else {
            setRender('')
        }
    })

    const pressList = () => changePage(3);

    const pressNumber = (num) => number.length < 3 ? setNumber(number + num) : null;

    return (
        <View style={styles.search}>
            <View style={styles.result}>
                <Text style={{fontSize:30,color:'white',textAlign:'center'}}>{render}</Text>
            </View>
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
            <View style={styles.keyboard}>
                <TouchableOpacity style={styles.item} onPress={() => pressNumber(1)}>
                    <Text style={styles.itemText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => pressNumber(2)}>
                    <Text style={styles.itemText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => pressNumber(3)}>
                    <Text style={styles.itemText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => setNumber('')}>
                    <Text style={styles.itemText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => pressNumber(4)}>
                    <Text style={styles.itemText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => pressNumber(5)}>
                    <Text style={styles.itemText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => pressNumber(6)}>
                    <Text style={styles.itemText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => pressNumber(0)}>
                    <Text style={styles.itemText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => pressNumber(7)}>
                    <Text style={styles.itemText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => pressNumber(8)}>
                    <Text style={styles.itemText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => pressNumber(9)}>
                    <Text style={styles.itemText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={pressList}>
                    <Text>
                        <FontAwesome name="list-alt" size={20} color="black" />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        flex: 1
    },
    result: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyboard: {
        height: 240,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    item: {
        width: '22%',
        height: 70,
        backgroundColor: '#fff',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 5
    },
    itemText: {
        fontSize: 20
    },
    number: {
        width: 150,
        height: 75,
        borderRadius: 20,
        backgroundColor: 'white',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flag: {
        width: 30,
        height: 20,
        borderStyle: 'solid',
        borderWidth: 1
    }
})
