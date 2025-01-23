import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Separator = () => <View style={styles.separator} />;

function Config() {
    return (
        <View style={styles.container}>
            <Separator />
            <Text style={styles.title}>Tema</Text>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Padrão</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.gray]}>
                    <Text style={[styles.text, styles.gray]}>Escuro</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    separator: {
        alignSelf: 'center',
        width: '100%',
        marginVertical: 20,
        borderBottomColor: '#E8E7EB',
        borderBottomWidth: 4,
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    containerButton:{
        gap: 16
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
        color: 'black'
    },
    text:{
        fontSize: 24,
        textAlign: 'center'
    }

})
export default Config;