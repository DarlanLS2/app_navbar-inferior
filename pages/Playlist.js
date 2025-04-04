import * as React from 'react';
import { ScrollView ,Image ,Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Playlist() {
  return (
    <View style={styles.body}>
      <ScrollView>

        <View style={styles.header}>
          <TextInput style={styles.header__searchBar} placeholder='Search'/>
          <Icon name="search" size={33} color="#FFFFFF" />
        </View>

        <View style={styles.main}>
          <View style={styles.main__musicList}>
            <View style={styles.musicList__top}>
              <View style={styles.simpleBox}>
                <Text style={styles.top__text}>Title</Text>
              </View>
              <View style={styles.simpleBox}>
                <Text style={styles.top__text}>Creator</Text>
              </View>
            </View>
            <View style={styles.musicList__content}>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/>
                  <Text style={styles.item__title}>Magma</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__creator}>Gojira</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/hell.jpeg')}/>
                  <Text style={styles.item__title}>Hell N black</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__creator}>Bakar</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/lady.jpeg')}/>
                  <Text style={styles.item__title}>Lady love</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__creator}>Oden & Fatzo</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/devil.jpeg')}/>
                  <Text style={styles.item__title}>Devil's work</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__creator}>Freddie Dredd</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/uuuu.jpeg')}/>
                  <Text style={styles.item__title}>uuuu</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__creator}>Steve Lacy</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/hail.jpeg')}/>
                  <Text style={styles.item__title}>Hail to the king</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__creator}>Avenged Sevenfold</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/sugar.jpeg')}/>
                  <Text style={styles.item__title}>Sugar</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__creator}>Men i trust</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/assumptions.jpeg')}/>
                  <Text style={styles.item__title}>Assumptions</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__creator}>Sam Gellaitry</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/seed.jpeg')}/>
                  <Text style={styles.item__title}>Seed of a Seed</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__creator}>Haley Heyndrerickx</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/japan.jpeg')}/>
                  <Text style={styles.item__title}>Japan</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__creator}>Yot club</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/loretta.jpeg')}/>
                  <Text style={styles.item__title}>Loretta</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__creator}>Ginger Root</Text>
                </View>
              </TouchableOpacity>
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
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#121212"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 150,
    padding: 20,
    paddingBottom: 30,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: '#000000',
    gap: 14
  },
  header__searchBar: {
    borderRadius: 4,
    height: 35,
    width: "80%",
    backgroundColor: "#FFFFFF",
  },
  main: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  main__musicList: {
    display: "flex",
    gap: 10,
    width: "100%",
    padding: 10,
  },
  musicList__top: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: 8,
    
  },
  top__text: {
    color: "#8C8C8C"
  },
  musicList__content: {
    display: 'flex',
    
  },
  musicList__item: {
    display: 'flex',
    flexDirection: "row",
    padding: 8,
  },
  simpleBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    gap: 12
  },
  item__img: {
    borderRadius: 4,
    width: 40,
    height: 40,
  },
  item__title: {
    color: "#FFFFFF"
  },
  item__creator: {
    color: "#8C8C8C"
  },




});
