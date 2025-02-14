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
import { useState } from "react";
import { useCategory } from "../CategoriesContext";

function DynamicCategoryScreen({ route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const { categoryId } = route.params;
  const { categories } = useCategory();

  const category = categories.find((item) => item.id === categoryId);

  return (
    <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
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
  um: {
    backgroundColor: "#7FAFF6",
  },
  dois: {
    backgroundColor: "#F97D7D",
  },
  tres: {
    backgroundColor: "#9D7FF6",
  },
  quatro: {
    backgroundColor: "#4AE9A7",
  },
  footer: {
    alignItems: "center",
    paddingVertical: 24,
    borderTopWidth: 1,
    borderTopColor: "#E8E7EB",
    gap: 24,
  },
  button: {
    backgroundColor: "#FF3763",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonClose:{
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
});

export default DynamicCategoryScreen;
