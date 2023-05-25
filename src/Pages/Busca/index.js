import { StyleSheet, TextInput, View } from 'react-native';

import { EvilIcons } from '@expo/vector-icons'; 

import { Component } from 'react';


export default class Busca extends Component {

  render(){

    return (
        <View style={styles.container}>
          <View style={styles.campoInput} >
            <EvilIcons name="search" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder='Pesquisar'
            />

          </View>
        </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 8,
    backgroundColor: '#fff',
  },
  campoInput: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    alignItems: 'center',
  },
  input: {
    borderColor: '#F1F1F1',
    padding: 8,
    fontSize: 18,
    width: '100%',
    height: 40
  }
});
