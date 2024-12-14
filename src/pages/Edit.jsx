import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Edit({ navigation }) {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.categoria} onPress={() => navigation.navigate('add')}>
                <Image source={require('../images/personalizar/add.png')} style={styles.imagem} />
                <Text style={styles.texto}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black'
    },
    texto: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    categoria: {
        padding: 5,
        width: 150,
        height: 150,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BEC5D1',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    imagem:{
        width: 100,
        height: 100
    }

})
export default Edit;