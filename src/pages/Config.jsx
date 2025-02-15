import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
const Separator = () => <View style={styles.separator} />;

function Config() {
    return (
        <View style={styles.container}>
            <View style={styles.separator}></View>
            <Text style={styles.title}>Tema</Text>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textoBotao}>Claro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textoBotao}>Escuro</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator}></View>
            <Text style={styles.title}>Contatos</Text>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textoBotao}>Adicionar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textoBotao}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textoBotao}>Remover</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    separator: {
        marginVertical: 20,
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    containerButton: {
        gap: 16,
    },
    button: {
        padding: 5,
        backgroundColor: '#f1f1f1',
        borderRadius: 10
    },
    textoBotao: {
        fontSize: 28
    },
    gray: {
        backgroundColor: 'gray',
        color: 'white'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 10
    },
    text: {
        fontSize: 24,
        textAlign: 'center'
    }

})
export default Config;