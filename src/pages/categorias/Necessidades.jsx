import React from "react";
import { useState } from "react";
import { Alert, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";

function Necessidades() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        { name: "Ajuda", image: require('../../images/necessidades/ajuda.png') },
        { name: "Dor", image: require('../../images/necessidades/dor.png') },
        { name: "Banheiro", image: require('../../images/necessidades/vaso.png') },
        { name: "Fome", image: require('../../images/necessidades/fome.png') }
    ];

    const openModal = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    return (
        <ScrollView>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.overlay}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {selectedItem && (
                                <>
                                    <Text style={styles.textStyle}>{selectedItem.name}</Text>
                                    <Image source={selectedItem.image} style={styles.modalImagem} />
                                </>
                            )}
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View style={styles.categorias}>
                {items.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.categoria} onPress={() => openModal(item)}>
                        <Image source={item.image} style={styles.imagem} />
                        <Text style={styles.texto}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    categorias: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: 30,
        marginTop: 50,
        paddingBottom: 20
    },
    categoria: {
        backgroundColor: '#7FAFF6',
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
    modalImagem: {
        width: 200,
        height: 200,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: 350,
        height: 350,
        margin: 0,
        backgroundColor: '#7FAFF6',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        marginTop: 20,
        borderRadius: 5,
        padding: 5,
    },
    buttonClose: {
        backgroundColor: 'red',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 32
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default Necessidades;
