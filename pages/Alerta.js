import * as React from 'react';
import { ScrollView ,Image ,Text, View, StyleSheet, TextInput } from 'react-native';


export default function Alerta() {
  return (
    <View style={styles.body}>
      <ScrollView>

        <View style={styles.header}>
          <TextInput style={styles.header__searchBar} placeholder='Search'/>
        </View>

        <View style={styles.main}>
          <View style={styles.main__musicList}>
            <View style={styles.musicList__top}>
              <Text style={styles.top__text}>Titulo</Text>
              <Text style={styles.top__text}>Álbum</Text>
            </View>
            <View style={styles.musicList__content}>
              <View style={styles.musicList__item}>
                {/* <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/> */}
                <Text style={styles.item__title}>Magma</Text>
                <Text style={styles.item__album}>Magma</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  header: {
    display: "flex",
    width: "100%",
    height: 150,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: '#000000'
  },
  header__searchBar: {
    borderRadius: 4,
    height: 35,
    width: "80%",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
  },
  main: {
    display: "flex",
    width: "100%",
    backgroundColor: "#a9a"
  },
  main__musicList: {
    display: "flex",
    gap: 10,
    backgroundColor: "#a1a",
    width: "100%",
  },
  musicList__top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "30%",
    backgroundColor: "#1a1"
  },
  top__text: {
    color: "#FFFFFF"
  }



});
