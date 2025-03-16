import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

// Exporta o Perfil
export default function Perfil() {
  return (
    <View style={styles.main}>
      <Text style={styles.main__text}>Perfil</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main__text: {
    fontSize: 20,
    fontWeight: 700,
    color: "black",
  }
})