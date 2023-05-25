import { StyleSheet, Text, View } from 'react-native';

import { Component } from 'react';

export default class Reels extends Component {
  
  render(){

    return (
        <View style={styles.container}>
          <View style={styles.areaTitulo} >
            <Text style={styles.tituloReels} >Reels</Text>
          </View>
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
  areaTitulo: { 

  },
  tituloReels: {
    fontSize: 24,
    fontWeight: 'bold'
  },
});
