import { FlatList, Image, StyleSheet, View } from 'react-native';
import { Component } from 'react';
import Feed from '../../Feed';


export default class Home extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      feed: [
        {
          id: 1,
          imgPerfil: {uri: 'https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          nomePerfil: 'anderssoncosta',
          postFeed: {uri: 'https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          descricao: 'Faça a pessoa que você gosta feliz.',
          curtidas: true,
          

        },
        {
          id: 2,
          imgPerfil: {uri: 'https://img.freepik.com/fotos-gratis/vista-frontal-homem-sorridente-tomando-selfie_23-2149556994.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          nomePerfil: 'mateussilveira',
          postFeed: {uri: 'https://img.freepik.com/fotos-gratis/vista-frontal-homem-sorridente-tomando-selfie_23-2149556994.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          descricao: 'Dia de sol',
          curtidas: true,
          
        },
        {
          id: 3,
          nomePerfil: 'giovannalima',
          imgPerfil: {uri: 'https://img.freepik.com/fotos-gratis/retrato-de-jovem-concurso-com-pele-sardenta-saudavel_158595-3947.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          postFeed: {uri: 'https://img.freepik.com/fotos-gratis/retrato-de-jovem-concurso-com-pele-sardenta-saudavel_158595-3947.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          descricao: 'Cada instante é sempre',
          curtidas: false,
        
        },
        {
          id: 4,
          imgPerfil: {uri: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          nomePerfil: 'renatabarreto',
          postFeed: {uri: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          descricao: 'Nada aleatório',
          curtidas: false,
          
        },
        {
          id: 5,
          imgPerfil: {uri: 'https://img.freepik.com/fotos-gratis/retrato-de-sorrindo-encantador-homem-jovem-em-cinzento-t-shirt-ficar-contra-planicie-fundo_23-2148213406.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          nomePerfil: 'derciopedrosa',
          postFeed: {uri: 'https://img.freepik.com/fotos-gratis/retrato-de-sorrindo-encantador-homem-jovem-em-cinzento-t-shirt-ficar-contra-planicie-fundo_23-2148213406.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          descricao: 'Crescer dói, e dói muito',
          curtidas: true,
        
        },
        {
          id: 6,
          imgPerfil: {uri: 'https://img.freepik.com/fotos-gratis/retrato-de-selfie-para-videochamada_23-2149186162.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          nomePerfil: 'alinefreitas',
          postFeed: {uri: 'https://img.freepik.com/fotos-gratis/retrato-de-selfie-para-videochamada_23-2149186162.jpg?size=626&ext=jpg&ga=GA1.2.680977189.1682560844&semt=ais'},
          descricao: 'Bondade de cada vez.',
          curtidas: false,
        
        }
      ]
    }
  }

  render(){

      return (
          <View style={styles.container}>
              <Image 
                source={require('../../../assets/logo.png')}
                style={styles.img}
              />
              
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={this.state.feed}
                keyExtractor={ item => item.id }
                renderItem={({item}) => <Feed data={item}/> }
              />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    
  },
  img:{
    width: 140,
    height: 40,
    marginBottom: 5,
  },
});
