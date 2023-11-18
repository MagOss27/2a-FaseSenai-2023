import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";  //importar para colocar ícones no nosso app
import Feather from "@expo/vector-icons/Feather"; //importar para colocar ícones no nosso app
import { useState } from 'react';
import { ScrollView } from 'react-native';

let postagens = [
  { imagem: 'youtube', texto: 'Ae galera, saiu video novo no canal. Passa lá pra ver eu destruindo no portugol!🔮📺 \nyuoutube.com/devManoJuca \n#fullStackPortugol #portugolehprogramacao #respeitaosdev #tmj' },
  { imagem: 'arrow-up-right', texto: 'Cada linha de código é uma oportunidade para transformar lógica em realidade. Codando para criar o futuro. 💻✨ #DesenvolvimentoInovador' },
  { imagem: 'cloud-off', texto: 'Bug? Isso é apenas um quebra-cabeça esperando para ser resolvido. Encontrando soluções elegantes no mundo da programação. 🐛🔍 #DebuggingLife' },
  { imagem: 'database', texto: 'Na estrada da programação, cada erro é uma lição e cada desafio é uma chance de crescimento. A busca pela eficiência nunca para. ⚡👩‍💻 #CaminhoDoDev' },
  { imagem: 'codesandbox', texto: 'Linhas de código se tornam pontes entre a imaginação e a realidade digital. Construindo possibilidades infinitas com as mãos no teclado. 🌉💡 #ArquitetoDeCodigo' },
  { imagem: 'coffee', texto: 'Café, código, repetir. A rotina de um dev é uma dança constante entre criatividade e lógica. 🚀☕ #CodigoCriativo' },
  { imagem: 'codepen', texto: 'Só os devs entendem a satisfação de um código limpo e bem documentado. Aquela sensação de realização é imbatível. 📝✅ #CodigoElegante' },
  { imagem: 'alert-triangle', texto: 'No universo binário, os desafios se transformam em oportunidades para inovação. Codando hoje o mundo de amanhã. 🌐👨‍💻 #FuturoDoCodigo' },
  { imagem: 'activity', texto: 'Enxergando além das linhas de código, vislumbrando um ecossistema de tecnologia em constante evolução. 🌍📱 #VisaoTech' },
  { imagem: 'award', texto: 'A comunidade de desenvolvedores é como um vasto playground virtual, onde ideias se tornam colaborações e projetos incríveis. 🤝🌈 #ComunidadeDev' },
  { imagem: 'aperture', texto: 'Cada algoritmo é uma jornada de resolução de problemas, uma trilha para aprimorar habilidades e chegar a soluções brilhantes. 🗺️✨ #AlgoritmoExplorador' },
]

export default function App() {

  const [conteudoFeed, setConteudoFeed] = useState(<Feed />)

  function mostrarFeed() {

    setConteudoFeed(<Feed />)

  }

  function mostrarPerfil() {

    setConteudoFeed(<Perfil />)

  }

  function novoPost() {

    setConteudoFeed(<NewPost />)

  }

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={mostrarFeed}>
          <FontAwesome
            name='home'
            size={45}
            color='black'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={mostrarPerfil}>
          <FontAwesome
            name='user'
            size={45}
            color='black'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={novoPost}>
          <FontAwesome
            name='file'
            size={35}
            color='black'
          />
        </TouchableOpacity>
      </View>
      <View style={styles.feed}>
        <ScrollView>
          {conteudoFeed}
        </ScrollView>
      </View>
      <View style={styles.footer}><Text style={{ color: '#0000ff' }}>Footer</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   //preencher todo valor possível
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: 'while',
    // height: 65,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 15,
    paddingTop: 40,
  },
  feed: {
    backgroundColor: '#444444',
    flex: 8,
    width: '100%',
  },
  footer: {
    backgroundColor: 'while',
    height: 65,
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    borderWidth: 1,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ddff',
    borderRadius: 10,
    height: 40, 
  },
  telaCrud:{
    alignItems: 'center',
    justifyContent: 'center',
   padding: 10,
  },
  inputs: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center',
    padding: 5,
    width: 250, 
  },
});

function Feed() {

  return (
    <View>
      {/* <Text style={{color:'#fff', marginTop:20, fontSize: 20}}>Olá, Eu sou um Componente.</Text> */}
      {/* <Post imagem={postagens[0].imagem} texto={postagens[0].texto} /> */}
      {postagens.map((post, index) => (
        <Post texto={post.texto} imagem={post.imagem} key={index} />
      ))}
    </View>
  )
}

function Post(props) {

  return (

    <View style={{ alignItems: 'center', padding: 30, marginBottom: 25, }}>
      <Feather
        name={props.imagem}
        size={145}
        color='black'
      />
      <Text>{props.texto}</Text>
    </View>
  )
}

function Perfil() {

  return (

    <View style={{ alignItems: 'center', padding: 30, marginBottom: 25, }}>
      <Feather
        name='user-check'
        size={160}
        color='#00ff00'
      />
      <Text style={styles.textoPerfil}> Tela de Perfil
      </Text>
    </View>
  )
}

function NewPost() {

  const [inputImagem, setinputImagem] = useState();
  const [inputTexto, setinputTexto] = useState();

  return (

    <View style={styles.telaCrud}>
      <TextInput
        value={inputImagem}
        onChangeText={setinputImagem}
        style={styles.inputs}
        placeholder='Digite o Nome da Imagem: '
      />
      <TextInput
        value={inputTexto}
        onChangeText={setinputTexto}
        style={styles.inputs}
        placeholder='Digite um Texto:'
      />
      <TouchableOpacity style={styles.botao} onPress={cadastrarPostagem}>
        <Text styles={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={pesquisar}>
          <Text styles={styles.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={excluir}>
          <Text styles={styles.textoBotao}>Apagar</Text>
        </TouchableOpacity>
    </View>
  )

  function cadastrarPostagem() {

    let produto = {
      imagem: inputImagem.toLowerCase(),
      texto: inputTexto,
    }
    postagens.push(produto);
    setinputImagem('')  //apagar conteúdo da Entrada do Nome
    setinputTexto('')
  }

  function pesquisar() {

    for (let i = 0; i < postagens.length; i++) {
      if (inputImagem == postagens[i].imagem) {
        setinputTexto((postagens[i].texto))
        return postagens[i]
      }
    }
  }

  function excluir() {

    let produtoExcluir = pesquisar()
    
    postagens.splice(postagens.indexOf(produtoExcluir), 1)
    setinputImagem('')
    setinputTexto('')
  }
}