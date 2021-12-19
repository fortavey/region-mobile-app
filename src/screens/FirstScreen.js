import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { THEME } from '../theme'
import { StatusBar } from 'expo-status-bar'

export const FirstScreen = () => {
  const [first, setFirst] = useState(true)

  const renderElement = () => {
    if (first) {
      return (
        <Text style={{ color: '#fff', fontSize: 24, textAlign: 'center' }}>
          "Регионы - Все Автономера России"
        </Text>
      )
    }
  }

  useEffect(() => {
    setFirst(true)
  }, [])

  return (
    <View style={styles.main}>
      <StatusBar style="dark" backgroundColor={THEME.MAIN_COLOR} />
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/adaptive-icon.png')}
      />
      {renderElement()}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.MAIN_COLOR,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
})
