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
        contentContainerStyle={styles.flatListContent}
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
  );
}

const styles = StyleSheet.create({
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

export default Home;