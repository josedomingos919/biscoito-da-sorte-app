import React, { Component } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: require("./src/biscoito.png"),
      phrase: "",
    };

    this.open = this.open.bind(this);

    this.phrases = [
      "A vida é como um biscoito, você nunca sabe o que vai encontrar dentro.",
      "Às vezes, um biscoito é tudo o que você precisa para alegrar o dia.",
      "Biscoitos são a solução para todos os problemas.",
      "Um biscoito por dia mantém a tristeza bem longe.",
      "Biscoitos são a melhor companhia para um café quentinho.",
      "A felicidade está em um pacote de biscoitos recém-saído do forno.",
      "Com um biscoito na mão, tudo fica mais gostoso.",
      "Biscoitos são como abraços comestíveis.",
      "Os melhores momentos da vida são aqueles compartilhados com biscoitos.",
      "Se a vida te der limões, troque por biscoitos.",
    ];
  }

  open() {
    let random = Math.floor(Math.random() * this.phrases.length);

    this.setState({
      phrase: this.phrases[random],
      img: require("./src/biscoitoAberto.png"),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.state.img} />
        <Text style={styles.textPhrase}>{this.state.phrase}</Text>
        <TouchableOpacity style={styles.button} onPress={this.open}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  textPhrase: {
    margin: 30,
    fontSize: 20,
    color: "#dd7b22",
    fontStyle: "italic",
    textAlign: "center",
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
