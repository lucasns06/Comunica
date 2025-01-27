import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Contatos = () => {

    const contatos = [
        { id: 0, nome: 'Lucas' },
        // { id: 1, nome: 'Contato 2' },
        // { id: 2, nome: 'Contato 3' },
    ];
    return (
        <>
            <View style={styles.contatos}>
                {contatos.map((contato) => (
                    <TouchableOpacity key={contato.id}>
                        <View style={styles.contato}></View>
                        <Text style={styles.contatoTexto}>{contato.nome}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    contatos: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    contato: {
        backgroundColor: 'gray',
        width: 100,
        height: 100,
        borderRadius: 100,
        alignItems: 'center',
    },
    contatoTexto: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    botao: {
        padding: 10,
        backgroundColor: '#ccc',
        margin: 10
    },
    botaoTexto: {
        textAlign: 'center'
    }
});

export default Contatos;
