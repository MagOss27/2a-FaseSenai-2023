import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {

  const [entrada, setEntrada] = useState('') //atualizar valores da tela
  const [saidaDolar, setSaidaDolar] = useState(0)

  function ConverterR_D() {

    //  alert(entrada)
    let dolar = (Number(entrada) / 4.87).toFixed(2)
    // alert('R$ ' + dolar)
    setSaidaDolar(dolar)
  }

  return (

    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.quadro}>
          <Text>Conversor de Reais para Dólar:</Text>
          <TextInput
            style={styles.input}
            value={entrada}
            keyboardType='numeric'
            onChangeText={setEntrada}
          />
          <TouchableOpacity style={styles.botao} onPress={ConverterR_D}>
            <Text style={styles.textoBotao}>Converter</Text>
          </TouchableOpacity>
          <Text>{saidaDolar}</Text>
        </View>
        <View style={styles.quadro}>
          <Text>Texto</Text>
        </View>
        <View style={styles.quadro}>
          <Text>Texto</Text>
        </View>
        <View style={styles.quadro}>
          <Text>Texto</Text>
        </View>
        <View style={styles.quadro}>
          <Text>Texto</Text>
        </View>
        <View style={styles.quadro}>
          <Text>Texto</Text>
        </View>
        <View style={styles.quadro}>
          <Text>Texto</Text>
        </View>
        <StatusBar style="auto" />
      </ScrollView >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    //  alignItems: 'center',
    //  justifyContent: 'center',
    height: '100%',
    width: '100%',
    gap: 15,
    paddingTop: 35,
    display: 'flex',
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 35,
    padding: 10,
    borderRadius: 100,
    marginBottom: 15,
  },
  quadro: {
    backgroundColor: 'violet',
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    display: 'flex',
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
    fontSize: 30,
  },
  scrollView: {
    // width: '100%',
    // showsVerticalScrollIndicator: 'false',
    // backgroundColor: 'blue'
  },
});