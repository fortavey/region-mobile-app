import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { THEME } from "../theme";
import { Number } from '../components/Number';
import fullListArr from '../arrays/fullList';

export const SearchScreen = ({ navigation }) => {
    const [number, setNumber] = useState('01');
    const [render, setRender] = useState('');

    let currentRegion = currentRegion = fullListArr.filter(el => el.code.includes(parseInt(number)));

    const renderMore = () => {
        if (currentRegion.length) {
            return (
                <TouchableOpacity style={styles.moreButton} onPress={() => navigation.navigate('Item', {...currentRegion})}>
                    <Text style={{color:'#fff'}}>Подробности</Text>
                </TouchableOpacity>
            )
        }
    }

    useEffect(() => {
        if(number.length) {
            currentRegion.length ? setRender(currentRegion[0].name) : setRender('Ничего не найдено');
        }else {
            setRender('');
        }
    })

    const pressNumber = (num) => number.length < 3 ? setNumber(number + num) : null;

    return (
        <View style={styles.search}>
            <View style={styles.result}>
                <Text style={{fontSize:30,color:THEME.MAIN_COLOR,textAlign:'center'}}>{render}</Text>
            </View>
            <Number number={number} isSearch={true}/>
            {renderMore()}
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
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullList')}>
                    <Text>
                        <FontAwesome name="list-alt" size={20} color="#fff" />
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
    moreButton: {
        width: '60%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.MAIN_COLOR,
        marginTop: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 5,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 3, height: 3 },
        elevation: 8
    },
    keyboard: {
        height: 240,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        marginTop: 15
    },
    item: {
        width: '22%',
        height: 70,
        backgroundColor: THEME.MAIN_COLOR,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 5,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 3, height: 3 },
        elevation: 8
    },
    itemText: {
        fontSize: 20,
        color: '#fff'
    }
})
