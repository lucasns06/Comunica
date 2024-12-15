import React from "react";
import { StyleSheet, Text, View } from "react-native"

const Perfil = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Nome</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        margin: 20
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',

    }

})
export default Perfil;