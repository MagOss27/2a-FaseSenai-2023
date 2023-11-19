import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';

export default function Home() {

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [birth, setBirth] = useState('')

    function handleeUserAdd() {

        console.log('Nome:' + name
            + '\nGênero: ' + gender
            + '\nData de Nascimento: ' + birth)

        Alert.alert('Nome:' + name
            + '\nGênero: ' + gender
            + '\nData de Nasc: ' + birth)
    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Preencha os Dados</Text>
            <TextInput
                style={styles.input}
                placeholder='Nome Completo'
                placeholderTextColor='black'
                value={name} //Captura o valor
                onChangeText={setName} //altera o valor
            />
            <TextInput
                style={styles.input}
                placeholder='Gênero'
                placeholderTextColor='black'
                value={gender} //Captura o valor
                onChangeText={setGender} //altera o valor
            />
            <TextInput
                style={styles.input}
                placeholder='Data de Nascimento'
                placeholderTextColor='black'
                value={birth} //Captura o valor
                onChangeText={setBirth} //altera o valor
            />
            <TouchableOpacity style={styles.btn} onPress={handleeUserAdd}>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}