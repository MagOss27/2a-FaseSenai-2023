import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function App() {

  const [input, setInput] = useState('');
  const [senha, setSenha] = useState(true);

  return (

    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder='Insira a Sua Senha'
          placeholderTextColor='#FFF'
          value={input}
          onChangeText={(texto) => setInput(texto)}
          secureTextEntry={senha}
        />
        <TouchableOpacity style={styles.icon} onPress={() => setSenha(!senha)}>
          {senha ?
            <Ionicons name='eye' color='#FFF' size={25} /> //olho aberto
            :
            <Ionicons name='eye-off' color='#FFF' size={25} /> //olho fechado
          }
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Estilização do Input Inteiro
  inputArea: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#121212',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
  },
  //Estilização do Input de Dentro
  input: {
    width: '85%',
    height: 50,
    color: '#FFF',
    padding: 8,
    fontSize: 18,
  },
  //Estilização do InputOlho
  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});