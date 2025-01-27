import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Edit({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.texto}>O que você quer adicionar?</Text> */}
      <View style={styles.containerBotoes}>
        <View>
            <Text style={styles.title}>Categorias</Text>
            <TouchableOpacity
            style={styles.categoria}
            onPress={() => navigation.navigate("add")}
            >
            <Image
                source={require("../images/personalizar/add.png")}
                style={styles.imagem}
            />
            <Text style={styles.textoBotao}>Adicionar</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.title}>Imagens</Text>
            <TouchableOpacity
            style={styles.categoria}
            onPress={() => navigation.navigate("addImage")}
            >
            <Image
                source={require("../images/personalizar/add.png")}
                style={styles.imagem}
            />
            <Text style={styles.textoBotao}>Adicionar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerBotoes:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      gap: 30,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    textAlign: 'center'
  },
  textoBotao: {
    color: "white",
    fontSize: 20,
  },
  texto: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
  },
  categoria: {
    padding: 5,
    width: 150,
    height: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#161616",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imagem: {
    width: 100,
    height: 100,
    tintColor: 'white'
  },
});
export default Edit;
