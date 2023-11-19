import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {

  const [imagemRpg, setimagemRpg] = useState(require('./imagens_rpg/startGame.png'))
  const [message, setMessage] = useState('');

  function SortearEmogi() {

    let n = Math.ceil(Math.random() * 20)

    switch (n) {
      case 1: setimagemRpg(require('./imagens_rpg/cacador.png'))
        setMessage('Fênix');
        break;

      case 2: setimagemRpg(require('./imagens_rpg/druida.png'))
        setMessage('Druida');
        break;

      case 3: setimagemRpg(require('./imagens_rpg/faca.png'))
        setMessage('Faca');
        break;

      case 4: setimagemRpg(require('./imagens_rpg/fogo.png'))
        setMessage('Fogo');
        break;

      case 5: setimagemRpg(require('./imagens_rpg/gema.png'))
        setMessage('Gema');
        break;

      case 7: setimagemRpg(require('./imagens_rpg/machado.png'))
        setMessage('Machado');
        break;

      case 8: setimagemRpg(require('./imagens_rpg/busca.png'))
        setMessage('Pergaminho');
        break;

      case 9: setimagemRpg(require('./imagens_rpg/necromante.png'))
        setMessage('Necromante');
        break;

      case 10: setimagemRpg(require('./imagens_rpg/Baú.png'))
        setMessage('Baú');
        break;

      case 11: setimagemRpg(require('./imagens_rpg/sacerdote.png'))
        setMessage('Sacerdote');
        break;

      case 12: setimagemRpg(require('./imagens_rpg/bruxa.png'))
        setMessage('Bruxa');
        break;

      case 13: setimagemRpg(require('./imagens_rpg/besta.png'))
        setMessage('Besta');
        break;

      case 14: setimagemRpg(require('./imagens_rpg/barbaro.png'))
        setMessage('Barbáro');
        break;

      case 15: setimagemRpg(require('./imagens_rpg/arqueiro.png'))
        setMessage('Arqueiro');
        break;

      case 16: setimagemRpg(require('./imagens_rpg/dragao.png'))
        setMessage('Dragão');
        break;

      case 17: setimagemRpg(require('./imagens_rpg/castelo.png'))
        setMessage('Castelo');
        break;

      case 18: setimagemRpg(require('./imagens_rpg/monstro.png'))
        setMessage('Mostro');
        break;

      case 19: setimagemRpg(require('./imagens_rpg/magico.png'))
        setMessage('Feiticeira');
        break;

      case 20: setimagemRpg(require('./imagens_rpg/livro.png'))
        setMessage('Livro');
        break;
    }
  }

  return (

    <View style={styles.container}>
      <Image
        source={imagemRpg}
        style={styles.image}
      />
      <TouchableOpacity style={styles.botao} onPress={SortearEmogi}>
        <Text style={styles.textoBotao}>Sortear</Text>
      </TouchableOpacity>
      <Text style={styles.messageText}>{message}</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  },
  textoBotao: {
    fontSize: 20,
    color: 'white'
  },
  messageText: {
    marginTop: 20,
    fontSize: 40,
    color: '#ffffff',
  },
});