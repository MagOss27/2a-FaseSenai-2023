import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {

  const [imagemBiscoito, setimagemBiscoito] = useState(require('./imagem_biscoito/biscoito.png'))
  const [message, setMessage] = useState('');

  function Quebrar() {

    setimagemBiscoito(require('./imagem_biscoito/biscoitoAberto.png'))

    let n = Math.ceil(Math.random() * 6)

    switch (n) {
      case 1: setimagemBiscoito(require('./imagem_biscoito/biscoitoAberto.png'))
        setMessage('legal');
        break;

      case 2: setimagemBiscoito(require('./imagem_biscoito/biscoitoAberto.png'))
        setMessage('show');
        break;

      case 3: setimagemBiscoito(require('./imagem_biscoito/biscoitoAberto.png'))
        setMessage('fantastico');
        break;

      case 4: setimagemBiscoito(require('./imagem_biscoito/biscoitoAberto.png'))
        setMessage('maneiro');
        break;

      case 5: setimagemBiscoito(require('./imagem_biscoito/biscoitoAberto.png'))
        setMessage('lindo');
        break;

      case 6: setimagemBiscoito(require('./imagem_biscoito/biscoitoAberto.png'))
        setMessage('perfeita');
        break;
    }

  }

  function Inteiro() {

    setimagemBiscoito(require('./imagem_biscoito/biscoito.png'))
    setMessage('Biscoito inteiro!');
  }

  return (

    <View style={styles.container}>
      <Image
        source={imagemBiscoito}
        style={styles.image}
      />
      <TouchableOpacity style={styles.botao} onPress={Quebrar}>
        <Text style={styles.textoBotao}>Quebrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={Inteiro}>
        <Text style={styles.textoBotao}>Deixar Inteiro</Text>
      </TouchableOpacity>
      <Text style={styles.messageText}>{message}</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20
  },
  botao: {
    width: 150,
    height: 50,
    backgroundColor: '#444444',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // gap=margin separação dos botões
  },
  textoBotao: {
    fontSize: 20,
  },
  messageText: {
    marginTop: 20,
    fontSize: 18,
    color: '#ffffff',
  },
});