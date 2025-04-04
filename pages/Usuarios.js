import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Usuarios() {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.header__title}>Profile</Text>
        <Image style={styles.header__img} source={require('../assets/profile.jpeg')}></Image>
      </View>
      <View style={styles.main}>
        <Text style={styles.main__text}>Nome: Darlan Leite Santos</Text>
        <Text style={styles.main__text}>Email: Darlan@gmail.com</Text>
        <Text style={styles.main__text}>Região: Brasil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  header: {
    display: "flex",
    position: "relative",
    height: 230,
    width: "100%",
    backgroundColor: '#000000',
  },
  header__title: {
    position: "absolute",
    top: "20%",
    left: 30,
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: 600,
  },
  header__img: {
   position: "absolute",
   top: '100%',
   left: '50%',
   transform: [
    { translateX: -130 }, 
    { translateY: -130 },
  ],
   borderRadius: 130,
   width: 260,
   height: 260,
  },
  main: {
    display: "flex",
    width: "100%",
    height: "100%",
    padding: 30,
    paddingTop: 150,
    gap: 6
  },
  main__text: {
    fontSize: 16,
    fontWeight: 500,
  },
});
