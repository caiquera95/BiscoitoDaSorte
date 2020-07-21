import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, StatusBar } from 'react-native';


class App extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      textoFrase: 'Aqui irá aparecer sua frase...', //State onde exibi a frase
      img: require('./src/biscoito.png')  
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    
    this.frases = [
      'Siga os bons e aprenda com eles',
      'O Palmeiras não tem mundial',
      'Faça o bem sempre',
      'É necessário sempre acreditar que o sonho é possível',
    ]
  }

  quebraBiscoito(){
    //Função para quebrar o biscoito ao ser clicado
    var numeroAleatorio = Math.floor(Math.random() * this.frases.length); //Verificando qtd de frases

    this.setState({
      textoFrase: ' "' +this.frases [numeroAleatorio] + '"',
      img: require('./src/biscoitoQuebrado.png')
    }) 
  }

  render(){
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
      source={this.state.img}
      style={styles.imagem}
      />

      <Text style={styles.txt}>{this.state.textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.areaBotao}>
          <Text style={styles.txtBotao}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>

  );
 }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },

  imagem: {
    width: 200, height: 200
  },

  txt: {
    marginTop: 50,
    fontSize: 24, fontStyle: 'italic'
  },  

  botao: {
    marginTop: 50,
    width: 220, height: 55,
  },

  areaBotao: {
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CD9C55',
    borderRadius: 12
  },

  txtBotao: {
    textAlign: "center", 
    fontSize: 26

  },

});

export default App;
