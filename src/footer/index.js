import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MaterialIcons, Feather, Foundation ,  } from '@expo/vector-icons'; 


import { Component } from 'react';


export default class Footer extends Component {
  
  render(){

    return (
        <View style={styles.container}>
          <TouchableOpacity>
            <Foundation name="home" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons name="ondemand-video" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="shopping-bag" size={24} color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Feather name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center'
  }
});
