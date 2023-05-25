import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Component } from 'react';

import Routes from './src/route';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {

  render(){
    return (
      <SafeAreaView style={styles.container} >
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  
});
