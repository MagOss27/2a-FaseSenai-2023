import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default props => {

    return (

        <View style={styles.display}>
            <Text
                style={styles.textoDisplayOper}
                numberOFLines={1}
            >{props.valor}
            </Text>

            <Text
                style={styles.textoDisplayRes}
                numberOFLines={1}
            >{props.res}
            </Text>


        </View>
    )
}

const styles = StyleSheet.create({

    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#444',
        width: '100%',
    },
    textoDisplayRes: {
        fontSize: 50,
        color: '#fff',
    },
    textoDisplayOper: {
        fontSize: 25,
        color: '#fff',
    },


})