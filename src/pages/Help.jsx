import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Contatos = () => {

    const contatos = [
        { id: 1, nome: 'Contato 1' },
        { id: 2, nome: 'Contato 2' },
        { id: 3, nome: 'Contato 3' },
    ];
    const opcoes = [
        { id: 1, texto: 'Adicionar' },
        { id: 2, texto: 'Editar' },
        { id: 3, texto: 'Excluir' },
    ]
    return (
        <>
            <View style={styles.contatos}>
                {contatos.map((contato) => (
                    <TouchableOpacity>
                        <View key={contato.id} style={styles.contato}></View>
                        <Text style={styles.contatoTexto}>{contato.nome}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View>
                {opcoes.map((opcoes) => (
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>{opcoes.texto}</Text>
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
        backgroundColor: '#007AFF',
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
