import { StyleSheet, Text, View, } from 'react-native';


import { Component } from 'react';


export default class Loja extends Component {
  
  render(){

    return (
        <View style={styles.container}>
          <Text style={styles.texto} >Lojas em Construção...</Text>
        </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize:30,
    fontWeight: 'bold'
  }
  
});
