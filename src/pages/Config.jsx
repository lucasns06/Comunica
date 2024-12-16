import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Separator = () => <View style={styles.separator} />;

function Config() {
    return (
        <View style={styles.container}>
            <Separator />
            <Text style={styles.title}>GERAL</Text>
            <TouchableOpacity>
                {/* <Image source={item.image} style={styles.imagem} /> */}
                <Text style={styles.text}>Tema</Text>
            </TouchableOpacity>
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