import * as React from 'react';
import { ScrollView ,Image ,Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Alerta() {
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
                <Text style={styles.top__text}>Titulo</Text>
              </View>
              <View style={styles.simpleBox}>
                <Text style={styles.top__text}>Álbum</Text>
              </View>
            </View>
            <View style={styles.musicList__content}>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/>
                  <Text style={styles.item__title}>Magma</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__album}>Magma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/>
                  <Text style={styles.item__title}>Magma</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__album}>Magma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/>
                  <Text style={styles.item__title}>Magma</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__album}>Magma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/>
                  <Text style={styles.item__title}>Magma</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__album}>Magma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/>
                  <Text style={styles.item__title}>Magma</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__album}>Magma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/>
                  <Text style={styles.item__title}>Magma</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__album}>Magma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/>
                  <Text style={styles.item__title}>Magma</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__album}>Magma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/>
                  <Text style={styles.item__title}>Magma</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__album}>Magma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/>
                  <Text style={styles.item__title}>Magma</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__album}>Magma</Text>
                </View>
              </TouchableOpacity>
            </View>
              <TouchableOpacity style={styles.musicList__item}>
                <View style={styles.simpleBox}>
                  <Image style={styles.item__img}source={require('../assets/magma.jpeg')}/>
                  <Text style={styles.item__title}>Magma</Text>
                </View>
                <View style={styles.simpleBox}>
                  <Text style={styles.item__album}>Magma</Text>
                </View>
              </TouchableOpacity>
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
    // backgroundColor: "#4f4f4f",
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
  item__album: {
    color: "#8C8C8C"
  },




});
