import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Button } from "react-native";

const Separator = () => <View style={styles.separator} />;

function Home({ navigation }) {

    return (
        <>
            <ScrollView style={styles.scrollview}>
                <View style={styles.categorias}>
                    <TouchableOpacity style={[styles.categoria, styles.um]} onPress={() => navigation.navigate('necessidades')}>
                        <Image source={require('../images/Necessidades.png')} style={styles.imagem} />
                        <Text style={styles.texto}>Necessidades</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoria, styles.dois]} onPress={() => navigation.navigate('emocoes')}>
                        <Image source={require('../images/triste.png')} style={styles.imagem} />
                        <Text style={styles.texto}>Emoções</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoria, styles.tres]} onPress={() => navigation.navigate('social')}>
                        <Image source={require('../images/diaAdia.png')} style={styles.imagem} />
                        <Text style={styles.texto}>Social</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoria, styles.quatro]} onPress={() => navigation.navigate('roupas')}>
                        <Image source={require('../images/roupa.png')} style={styles.imagem} />
                        <Text style={styles.texto}>Roupas</Text>
                    </TouchableOpacity>
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
        marginVertical: 8,
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
        marginTop: 50,
        paddingBottom: 20
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
