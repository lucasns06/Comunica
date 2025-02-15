import {
  FlatList,
  StyleSheet,
  Modal,
  View,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { useCategory } from "../CategoriesContext";

function DynamicCategoryScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSecond, setModalVisibleSecond] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };
  const openModalSecond = () => {
    setModalVisibleSecond(true);
  };
  const { categoryId } = route.params;
  const { categories } = useCategory();

  const category = categories.find((item) => item.id === categoryId);

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisibleSecond}
        onRequestClose={() => {
          setModalVisibleSecond(!modalVisibleSecond);
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.centeredView}>
            <View style={styles.modalViewSecond}>
              <TouchableOpacity
                style={styles.buttonModal}
                onPress={() => [setModalVisibleSecond(!modalVisibleSecond), navigation.navigate("addImage")]} >
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
              onPress={() => setModalVisibleSecond(!modalVisibleSecond)}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.centeredView}>
            <View style={[styles.modalView, category.cor]}>
              {selectedItem && (
                <>
                  <Text style={styles.textStyle}>{selectedItem.texto}</Text>
                  <Image
                    source={selectedItem.imagem}
                    style={styles.modalImagem}
                  />
                </>
              )}
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FlatList
        data={category.imagens}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.categoria, item.cor]}
            onPress={() => openModal(item)}
          >
            <Image source={item.imagem} style={styles.imagem} />
            <Text style={styles.texto}>{item.texto}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonOpenModal}
          onPress={() => openModalSecond()} >
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
    backgroundColor: "white",
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 32
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
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewSecond: {
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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContent: {
    padding: 20,
  },
  categoria: {
    // flex: 1,
    margin: 10,
    padding: 10,
    width: "45%",
    aspectRatio: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
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
    justifyContent: "center",
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
  buttonClose: {
    marginTop: 20
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
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
  buttonOpenModal: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  buttonModal: {
    width: 120,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "blue",
    marginVertical: 5
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default DynamicCategoryScreen;
