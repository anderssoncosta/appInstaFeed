import { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Feed extends Component {
  
  constructor(props){
    super(props)
    this.state = {
       feed: this.props.data
    }
    this.trocaIcone = this.trocaIcone.bind(this)
    this.like = this.like.bind(this)
  }

    trocaIcone = (curtidas) =>{
      return curtidas ? require('../../assets/like.png') : require('../../assets/likeada.png')
    }

    like = () => {
      let feed = this.state.feed

      if( feed.curtidas === true ){
        this.setState({
          feed: {
            curtidas: false
          }
        })
      }else{
        this.setState({
          feed: {
            curtidas: true
          }
        })
      }

      console.log(feed.curtidas)
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
              <TouchableOpacity onPress={this.like} >
                <Image  
                  source={this.trocaIcone(this.state.feed.curtidas)}
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

        </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 5,
  },
  info:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  feedInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
    // margin: 8
  },
  feedPerfilImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5 
  },
  feedNome:{
    fontSize: 14,
    fontWeight: 'bold',
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
    padding: 10
  },
  icons:{
    width: 25,
    height:25,
    marginRight: 8,
  },
  feedDescricao: {
    flexDirection: 'row',
    padding: 10
  },
  textoPost: {
    fontSize: 14,
    marginLeft: 5
  },
  descricao: {
    width: 100,
  }
});
