import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <Body />
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

function Header() {

  return (
    <View style={styleHeader.header}>
      <View style={styleHeader.linha}>
        <Text style={styleHeader.texto}>Conversor de Base</Text>
        <View style={{ flexDirection: 'row', gap: 10, }}>
          <Text style={styleHeader.texto}>RESET</Text>
          <Feather
            name='more-vertical'
            size={30}
            color='#fff'
          />
        </View>
      </View>
      <View style={styleHeader.linha}>
        <Text style={styleHeader.textoL2}>BASES COMUNS</Text>
        <Text style={styleHeader.textoL2}>TODAS AS BASES</Text>
      </View>
    </View>
  )
}

const styleHeader = StyleSheet.create({
  header: {
    backgroundColor: '#3252e5',
    height: 100,
    width: '100%',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  texto: {
    color: '#fff',
    fontSize: 22,
  },
  textoL2: {
    color: '#fff',
    fontSize: 15,
  }
});

function Body() {

  return (
    <View style={styleBody.body}>
      <View style={{ width: '100%', gap: 5, alignItems: 'center', }}>
        <Bin />
        <Oct />
        <Dec />
        <Hex />
      </View>
      <Propaganda />
    </View>
  )
}

const styleBody = StyleSheet.create({
  body: {
    backgroundColor: '#222222',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  bin: {
    width: '90%',
    height: 50,
    backgroundColor: '555555',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#3252e5',
    borderRadius: 10,
  },
  esquerda: {
    height: '100%',
    width: '20%',
    backgroundColor: '#3252e5',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  texto: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    width: '80%',
    height: '100%',
    backgroundColor: '#222',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  propaganda: {
    backgroundColor: '#fff',
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPropaganda: {
    fontSize: 40,
  },
});

function Bin() {

  return (
    <View style={styleBody.bin}>
      <View style={styleBody.esquerda}>
        <Text style={styleBody.texto}>Bin</Text>
      </View>
      <TextInput
        placeholder='Base 2'
        placeholderTextColor={'#aaaaaa'}
        style={styleBody.input}
      />
    </View>
  )
}

function Oct() {

  return (
    <View style={styleBody.bin}>
      <View style={styleBody.esquerda}>
        <Text style={styleBody.texto}>Oct</Text>
      </View>
      <TextInput
        placeholder='Base 2'
        placeholderTextColor={'#aaaaaa'}
        style={styleBody.input}
      />
    </View>
  )
}

function Dec() {

  return (
    <View style={styleBody.bin}>
      <View style={styleBody.esquerda}>
        <Text style={styleBody.texto}>Dec</Text>
      </View>
      <TextInput
        placeholder='Base 2'
        placeholderTextColor={'#aaaaaa'}
        style={styleBody.input}
      />
    </View>
  )
}

function Hex() {

  return (
    <View style={styleBody.bin}>
      <View style={styleBody.esquerda}>
        <Text style={styleBody.texto}>Hex</Text>
      </View>
      <TextInput
        placeholder='Base 2'
        placeholderTextColor={'#aaaaaa'}
        style={styleBody.input}
      />
    </View>
  )
}

function Propaganda() {

  return (
    <View style={styleBody.propaganda}>
      <Text style={styleBody.textoPropaganda}>SHEIN</Text>
    </View>
  )
}