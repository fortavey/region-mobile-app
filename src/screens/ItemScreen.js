import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { THEME } from '../theme'
import { Number } from '../components/Number'
import mainArr from '../arrays/fullList'
import { StatusBar } from 'expo-status-bar'

export const ItemScreen = ({ route, navigation }) => {
  let item = null
  if (route.params) {
    item = route.params[0]
  } else {
    item = mainArr[0]
  }

  const renderNumbers = item.code.map((code) => (
    <View key={code.toString()} style={styles.number}>
      <Number number={code < 10 ? `0${code}` : code} />
    </View>
  ))

  return (
    <View style={styles.main}>
      <StatusBar style="light" backgroundColor={THEME.MAIN_COLOR} />
      <View style={styles.numbers}>{renderNumbers}</View>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text>({item.district})</Text>
    </View>
  )
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
    justifyContent: 'space-around',
  },
  number: {
    width: '40%',
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  mapButton: {
    width: '80%',
    padding: 10,
    backgroundColor: THEME.MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
})
