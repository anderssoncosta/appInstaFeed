import { StyleSheet, Text, View } from 'react-native';

import { Component } from 'react';



export default class Perfil extends Component {
  
  render(){

    return (
        <View style={styles.container}>
          <Text style={styles.textoPerfil}>
            Perfil
          </Text>
        </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#FFF',
  },
  textoPerfil:{
    fontSize: 24,
    fontWeight: 'bold'
  },
});
