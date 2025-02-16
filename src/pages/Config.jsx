import React, { useState } from "react";
import { Switch, StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Config() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.separator}></View>
            <Text style={styles.title}>Tema</Text>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={toggleSwitch} className="flex-row items-center justify-between bg-gray-200 rounded-xl px-2">
                    <Text className="text-2xl">Modo Escuro</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
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