import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
  Pressable
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useCategory } from "../CategoriesContext";

function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { categories } = useCategory();

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.buttonModal}
                onPress={() => [setModalVisible(!modalVisible), navigation.navigate("add")]} >
                <Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonModal}
                onPress={() => navigation.navigate("")} >
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonModal}
                onPress={() => navigation.navigate("")} >
                <Text style={styles.buttonText}>Remover</Text>
              </TouchableOpacity>
            </View>
            <Pressable
              style={styles.buttonModal}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.container2}>
        <FlatList
          data={categories}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.categoria, item.cor]}
              onPress={() =>
                navigation.navigate("CategoryScreen", { categoryId: item.id })
              }
            >
              <Image source={item.imagem} style={styles.imagem} />
              <Text style={styles.texto}>{item.texto}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("tts")}  >
            <Image
              source={require("../images/audio.png")}
              style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("help")} >
            <Text style={styles.buttonText}>AJUDA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOpenModal}
            onPress={() => openModal()} >
            <Feather
              name="edit"
              size={28}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    marginBottom: 72
  },
  flatListContent: {
    padding: 20,
  },
  categoria: {
    margin: 10,
    width: "45%",
    aspectRatio: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  imagem: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  texto: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
  },
  footer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 14,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
  },
  button: {
    backgroundColor: "#FF3763",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonOpenModal: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#2FAFF6",
  },
  iconButton: {
    padding: 10,
    backgroundColor: "#5DF991",
    borderRadius: 20,
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
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
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#fff"
  },
  buttonModal:{
    width: 120,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "blue",
    marginVertical: 5
  }
});

export default Home;