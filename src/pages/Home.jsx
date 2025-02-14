import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { useCategory } from "../CategoriesContext";

function Home({ navigation }) {
  const { categories } = useCategory();

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={categories}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "rgba(68, 162, 255, 0.05)",
    backgroundColor: "#fff",
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
    marginVertical: "25%",
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 14,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
  },
  button: {
    backgroundColor: "#FF3763",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: 128
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
    width: 71
  },
  iconImage: {
    width: 50,
    height: 50,
  },
});

export default Home;