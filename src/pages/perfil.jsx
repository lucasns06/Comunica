import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useUser } from '../UserContext';

const Perfil = () => {
    const { nome } = useUser();
    return (
        <View style={styles.container}>
            <View style={styles.topBackground}></View>
            <View style={styles.perfil}></View>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>{nome}</Text>
            <TouchableOpacity>
                <Text>Editar</Text>
            </TouchableOpacity>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    },
    topBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 100,
        backgroundColor: '#3387FF',
        width: '100%',
        borderBottomLeftRadius: '100%',
        borderBottomRightRadius: '100%',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 28,
        fontWeight: 400,
    },
    perfil: {
        marginTop: 20,
        backgroundColor: 'white',
        width: 150,
        height: 150,
        borderRadius: '100%',
        borderColor: '#ffffff',
        borderWidth: 2,
        boxShadow: '0px 0px 10px rgba(0, 81, 255, 0.74)',
    }
})
export default Perfil;