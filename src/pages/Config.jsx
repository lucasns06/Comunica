import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Config() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>GERAL</Text>
            <TouchableOpacity>
                {/* <Image source={item.image} style={styles.imagem} /> */}
                <Text style={styles.text}>Tema</Text>
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
    text:{
        fontSize: 24,
    }

})
export default Config;