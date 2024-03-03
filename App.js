import React from "react";

import { Component } from "react";
import { styles } from "./styles";
import { appPhrases } from "./util";
import { Image, View, Text, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: require("./src/biscoito.png"),
      phrase: "",
    };

    this.phrases = appPhrases;
    this.open = this.open.bind(this);
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
