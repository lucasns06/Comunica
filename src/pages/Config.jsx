import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
const Separator = () => <View style={styles.separator} />;

function Config() {
    return (
        <View style={styles.container}>
            <View style={styles.separator}></View>
            <Text style={styles.title}>Tema</Text>
            <View style={styles.containerButton}>
                <Button title="Claro"> </Button>
                <Button title="Escuro"> </Button>
            </View>
            <Text style={styles.title}>Contatos</Text>
            <View style={styles.containerButton}>
                <Button title="Adicionar"> </Button>
                <Button title="Editar"> </Button>
                <Button title="Deletar"> </Button>
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
    containerButton:{
        gap: 16,
    },  
    button:{
        padding: 5,
        backgroundColor: 'white',
        borderWidth: 2,
        width: 150,
    },
    gray:{
        backgroundColor: 'gray',
        color: 'white'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 10
    },
    text:{
        fontSize: 24,
        textAlign: 'center'
    }

})
export default Config;