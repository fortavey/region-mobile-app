import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { THEME } from '../theme'

export const BottomTabs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('FullList')}
      >
        <Text style={styles.itemText}>Полный список</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('DistList')}
      >
        <Text style={styles.itemText}>Список по округам</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.MAIN_COLOR,
    flexDirection: 'row',
    paddingBottom: 20,
  },
  item: {
    width: '50%',
    borderColor: 'silver',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  itemText: {
    color: '#fff',
  },
})
