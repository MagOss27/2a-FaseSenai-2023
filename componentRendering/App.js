import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1)
  }
  
  function diminuir() {
    setContador(contador - 1)
  }

  return (
    <View style={styles.container}>
      {/* {renderizar && <Componente1 />} */}
      {/* {contador > 5 && <Componente1 />} */}
      {contador > 0 ? <Componente1 /> : <Componente2 />}
      <Button title='AUMENTAR' onPress={aumentar} />
      <Text>{contador}</Text>
      <Button title='DIMINUIR' onPress={diminuir} />
      <StatusBar style="auto" />
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
});

function Componente1() {
  
  return (
    <Text>Eu sou o Componente1</Text>
  )
}

function Componente2() {
  
  return (
    <Text>Eu sou o Componente2</Text>
  )
}