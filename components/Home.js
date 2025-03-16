import React from 'react';
import {View, StyleSheet, Text, Button, Touchable, TouchableOpacity} from 'react-native'

// Exportação da Home com a propriedade navigation
export default function Home({ navigation }) {
  return (
    <View style={styles.main}>
      <Text style={styles.main__title}>Home</Text>
      {/* Usa a propriedade navigation para navegara até a tela perfil */}
      <TouchableOpacity style={styles.main__btn} onPress={ () => navigation.navigate('Perfil')}>
        <Text style={styles.btn__text}>Perfil</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
  },
  main__title: {
    fontSize: 20,
    fontWeight: 600,
  },
  main__btn: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,

  },
  btn__text: {
    fontWeight: 700,
    fontSize: 15,
    color: "white"
  }
}) 