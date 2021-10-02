import React, {useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { THEME } from '../theme';
import { Number } from "../components/Number";
import { AntDesign } from '@expo/vector-icons';

export const ItemScreen = ({ route, navigation }) => {

    const item = route.params[0];

    useEffect(() => {
        navigation.setOptions({
            title: item.name,
            headerRight: () => (
                <AntDesign style={{marginRight:10}} name="search1" size={24} color="white" onPress={() => navigation.navigate('Search')}/>
            ),
        })
    }, []);

    const renderNumbers = item.code.map(code => (<View key={code.toString()} style={styles.number}><Number number={code < 10 ? `0${code}` : code}/></View>))

    return (
        <View style={styles.main}>
            <View style={styles.numbers}>
                { renderNumbers }
            </View>
            <Text style={styles.itemTitle}>{ item.name }</Text>
            <Text>({ item.district })</Text>
            <TouchableOpacity style={styles.mapButton} onPress={() => navigation.navigate('Map')}>
                <Text style={{color: '#fff'}}>Показать на карте</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numbers: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    number: {
        width: '40%',
        marginBottom: 10
    },
    itemTitle: {
        fontSize: 20,
        fontFamily: 'roboto-bold, sans-serif',
        marginBottom: 10,
        marginTop: 20
    },
    mapButton: {
        width: '80%',
        padding: 10,
        backgroundColor: THEME.MAIN_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
})