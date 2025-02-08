import { Picker } from "@react-native-picker/picker";
import {
  Modal,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { useCategory } from "../CategoriesContext";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
function Add() {
  const { categories } = useCategory();
  const [texto, setTextolocal] = useState("");
  const [warning, setWarning] = useState("");
  const [image, setImage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused()
  }
  const toggleFocus = () => {
    setIsFocused(prevState => !prevState)
  }
  const openModal = () => {
    setModalVisible(true);
  };

  function clear() {
    setWarning("");
    setTextolocal("");
  }
  function verificar() {
    let nomeValido = true;
    if (!texto.trim()) {
      setWarning("Preencha um nome!");
      nomeValido = false;
    }
    if (nomeValido) {
      categories.push[
        {
          imagem: require('../images/error.png'),
          texto: texto,
          cor: styles.dois
        }
      ]
      openModal();
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
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
                <Text style={styles.modalText}>Categoria Salva!</Text>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}
                  style={[styles.button, styles.buttonClose]}
                >
                  <Text style={styles.modalText}>Fechar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.container}>
          {image ? (
            <Image source={{ uri: image }} style={styles.imagem} />
          ) : (
            <Image
              source={require("../images/personalizar/image.png")}
              style={styles.imagem}
            />
          )}
          <Text style={styles.texto}>Imagem</Text>
          <TouchableOpacity
            style={[styles.button, styles.um]}
            onPress={pickImage}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={[styles.input, isFocused ? styles.focusedInput : ""]}
            placeholder="Nome da categoria"
            onFocus={() => [clear(), handleFocus()]}
            onblur={() => toggleFocus()}
            value={texto}
            onChangeText={setTextolocal}
          />
          <Text style={styles.red}>{warning}</Text>
          <Text style={styles.label}>Cor de fundo (Opcional)</Text>
          <Picker style={styles.input}>
            <Picker.Item label="Selecione..." value="" />
            <Picker.Item label="Branco" value="#fff" />
            <Picker.Item label="Vermelho" value="#F97D7D" />
            <Picker.Item label="Verde" value="#4AE9A7" />
            <Picker.Item label="Azul" value="#7FAFF6" />
            <Picker.Item label="Roxo" value="#9D7FF6" />
          </Picker>
          <TouchableOpacity
            style={[styles.button, styles.dois]}
            onPress={() => verificar()}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  um: {
    backgroundColor: "#2C36FA",
  },
  dois: {
    backgroundColor: "#51D93F",
  },
  red: {
    color: "red",
  },
  container: {
    margin: 20,
  },
  label: {
    marginTop: 30,
    color: "black",
    fontSize: 22,
  },
  input: {
    marginTop: 10,
    fontSize: 18,
    backgroundColor: "#F5F5F6",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  focusedInput: {
    // marginTop: 10,
    // fontSize: 18,
    // backgroundColor: "#F5F5F6",
    // borderRadius: 10,
    // paddingHorizontal: 15,
    // paddingVertical: 10,
    // width: "100%",
    borderWidth: 2,
    borderColor: '#66A5FF'
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
  texto: {
    textAlign: "center",
    color: "black",
    fontSize: 28,
  },
  button: {
    margin: "auto",
    width: 150,
    marginTop: 40,
    padding: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 28,
  },
  imagem: {
    width: 100,
    height: 100,
    margin: "auto",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 200,
    margin: 0,
    backgroundColor: "#51D93F",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  }
});
export default Add;
