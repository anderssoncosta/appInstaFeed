import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Component } from 'react';


export default class Feed extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      feed: this.props.data
    }
     this.like = this.like.bind(this)
  
  }

  like(curtidas){
    if(curtidas === true){
      return require('../../assets/likeada.png')
    }else{
      return require('../../assets/like.png')
    }
  }
  render(){

    return (
        <View style={styles.container}>
          
          <View style={styles.info} >
            <View style={styles.feedInfo} >
              <TouchableOpacity>
                <Image 
                style={styles.feedPerfilImg}
                  source={ this.props.data.imgPerfil }
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Text 
                  style={styles.feedNome}>
                    { this.props.data.nomePerfil }
                </Text>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity>
              <AntDesign name="ellipsis1" size={24} color="black" />
            </TouchableOpacity>

          </View>

            <View style={styles.postFeed} >
              <Image 
                style={styles.feedImg}
                source={ this.props.data.postFeed }
              />
            </View>

            <View style={styles.feedIcons}>
              <TouchableOpacity>
              
              <Image 
                source={this.like(this.props.data.curtidas)}
                style={styles.icons}
              />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image 
                  source={require('../../assets/send.png')}
                  style={styles.icons}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.feedDescricao} >
              <TouchableOpacity>
                <Text 
                  style={styles.feedNome}>
                    { this.props.data.nomePerfil }
                </Text>
              </TouchableOpacity>
              <Text 
                style={styles.textoPost} >
                  { this.props.data.descricao }
              </Text>
            </View>    

          <StatusBar style="auto" />
        </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 5,
  },
  info:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  feedInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
    margin: 8
  },
  feedPerfilImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5 
  },
  feedNome:{
    fontSize: 14,
    fontWeight: 'bold'
  },
  postFeed:{
    width: '100%',
  },
  feedImg:{
    width: 400,
    height: 350
  },
  feedIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
  },
  icons:{
    width: 25,
    height:25,
    margin: 8
  },
  feedDescricao: {
    flexDirection: 'row'
  },
  textoPost: {
    fontSize: 14,
    marginLeft: 5
  },
  descricao: {
    width: 100,

  }

  
});
