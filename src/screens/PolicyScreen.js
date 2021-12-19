import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import { StatusBar } from 'expo-status-bar'
import { THEME } from '../theme'

export const PolicyScreen = ({ navigation }) => {
  let [load, setLoad] = useState(false)
  return (
    <View style={styles.main}>
      <StatusBar style="dark" />
      <WebView
        style={styles.container}
        source={{ uri: 'https://xbetapp1.com/policy.php' }}
        onLoadEnd={(syntheticEvent) => {
          setLoad(true)
        }}
      />
      {load && (
        <View style={styles.okButtonContainer}>
          <TouchableOpacity
            style={styles.okButton}
            onPress={() => navigation.navigate('First')}
          >
            <Text style={{ color: '#fff', fontSize: 25 }}>OK</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    paddingTop: 35,
    position: 'relative',
  },
  okButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 130,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  okButton: {
    backgroundColor: THEME.MAIN_COLOR,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
})
