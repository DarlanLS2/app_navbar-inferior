import { Assets } from "@react-navigation/stack";
import * as React from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <View style={styles.body}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.header__title}>Home</Text>
        </View>
        <View style={styles.main}>
          <TouchableOpacity style={styles.main__item}>
            <Image style={styles.item__img}source={require('../assets/magma.jpeg')}></Image>
            <Text style={styles.item__musicName}>Magma</Text>
            <Text style={styles.item__musicCreator}>Gojira</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.main__item}>
            <Image style={styles.item__img}source={require('../assets/lady.jpeg')}></Image>
            <Text style={styles.item__musicName}>Lady love</Text>
            <Text style={styles.item__musicCreator}>Oden & Fatzo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.main__item}>
            <Image style={styles.item__img}source={require('../assets/devil.jpeg')}></Image>
            <Text style={styles.item__musicName}>Devil's work</Text>
            <Text style={styles.item__musicCreator}>Freddie Dredd</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.main__item}>
            <Image style={styles.item__img}source={require('../assets/hell.jpeg')}></Image>
            <Text style={styles.item__musicName}>Hell N blck</Text>
            <Text style={styles.item__musicCreator}>Bakar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.main__item}>
            <Image style={styles.item__img}source={require('../assets/uuuu.jpeg')}></Image>
            <Text style={styles.item__musicName}>uuuu</Text>
            <Text style={styles.item__musicCreator}>Steve Lacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.main__item}>
            <Image style={styles.item__img}source={require('../assets/hail.jpeg')}></Image>
            <Text style={styles.item__musicName}>Hail to the king</Text>
            <Text style={styles.item__musicCreator}>Avenged Sevenfold</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.main__item}>
            <Image style={styles.item__img}source={require('../assets/think.jpeg')}></Image>
            <Text style={styles.item__musicName}>I hope that you think of me</Text>
            <Text style={styles.item__musicCreator}>Pity party</Text>
          </TouchableOpacity>
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
    height: 90,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: '#000000'
  },
  header__title: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 600,
    color: "#FFFFFF",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    gap: 10,
    backgroundColor: "#151515",
    width: "100%",
  },
  main__item: {
    display: "flex",
    flexDirection: 'column',
    gap: 5,
    padding: 12,
    backgroundColor: "#1F1F1F",
    borderRadius: 8,
  },
  item__img: {
    width: 150,
    height: 150,
  },
  item__musicName: {
    color: "#FFFFFF",
  },
  item__musicCreator: {
    color: "#B3B3B3",
    fontWeight: 300,
    fontSize: 12,
  },
});
