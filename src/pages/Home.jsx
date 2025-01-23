import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Button, StatusBar } from "react-native";

const Separator = () => <View style={styles.separator} />;

function Home({ navigation }) {
    const categorias = [
        {
            id: 0,
            imagem: require('../images/Necessidades.png'),
            texto: 'Necessidades',
            navegacao: 'necessidades',
            cor: styles.um
        },
        {
            id: 1,
            imagem: require('../images/triste.png'),
            texto: 'Emoções',
            navegacao: 'emocoes',
            cor: styles.dois
        },
        {
            id: 2,
            imagem: require('../images/diaAdia.png'),
            texto: 'Social',
            navegacao: 'social',
            cor: styles.tres
        },
        {
            id: 3,
            imagem: require('../images/roupa.png'),
            texto: 'Roupas',
            navegacao: 'roupas',
            cor: styles.quatro
        }
    ]
    let i = 0;
    for(i ; i < 5 ; i++){
        
    }
    return (
        <>
            <ScrollView style={styles.scrollview}>
            <Separator />
                <View style={styles.categorias}>
                    {categorias.map((item)=>(
                        <TouchableOpacity key={item.id} style={[styles.categoria, item.cor]} onPress={() => navigation.navigate(item.navegacao)}>
                            <Image source={item.imagem} style={styles.imagem} />
                            <Text style={styles.texto}>{item.texto}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <Separator />
                <View style={styles.inputContainer2}>
                    <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('tts')}>
                        <Image source={require('../images/audio.png')} style={styles.iconImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('help')}>
                        <Text style={styles.buttonText}>AJUDA</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF3763',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        alignSelf: 'center',
        width: '90%',
        marginVertical: 20,
        borderBottomColor: '#E8E7EB',
        borderBottomWidth: 4,
    },
    scrollview: {
        backgroundColor: 'white',
        paddingBottom: 20,
    },
    um: {
        backgroundColor: '#7FAFF6'
    },
    dois: {
        backgroundColor: '#F97D7D'
    },
    tres: {
        backgroundColor: '#9D7FF6'
    },
    quatro: {
        backgroundColor: '#4AE9A7'
    },
    categorias: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: 30,
        // marginTop: 50,
        // paddingBottom: 20
    },
    categoria: {
        padding: 5,
        width: 150,
        height: 150,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    imagem: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    texto: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    inputContainer: {
        padding: 20,
        alignItems: 'center',
        marginBottom: 100,
    },
    inputContainer2: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textInput: {
        width: '60%',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 18,
    },
    iconButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5DF991',
        borderRadius: 20
    },
    iconImage: {
        width: 50,
        height: 50,
    },
});

export default Home;
