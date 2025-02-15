import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator } from "react-native";
import { useUser } from "../UserContext";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Perfil = ({ navigation }) => {
  const [image, setImage] = useState();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImageData = async () => {
      try {
        const imageData = await AsyncStorage.getItem('imageData');
        if (imageData) {
          setImage(JSON.parse(imageData));
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImageData();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync
      ({
        mediaTypes: ["images", "videos"],
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
      });

    console.log(result);

    if (!result.canceled) {
      const newImage = result.assets[0].uri 
      setImage(newImage);
      await AsyncStorage.setItem('imageData', JSON.stringify(newImage));
    }
  };

  if (isLoading) {
    return null;
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBackground}></View>
      <View style={styles.containerCenter}>
        <TouchableOpacity style={styles.perfil} onPress={pickImage}>
          {image ? (<Image source={{ uri: image }} style={styles.imagem} />) : (<Image source={require("../images/photo.png")} style={styles.imagem} />)}
        </TouchableOpacity>
      </View>
      <View style={styles.containerTexto}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>{user.nome}</Text>
        <View style={styles.separator}></View>
        <Text style={styles.title}>Gênero</Text>
        <Text style={styles.text}>{user.sexo}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.containerPerfil]}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  containerTexto: {
    paddingHorizontal: 32,
    paddingTop: 16,
  },
  topBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 100,
    backgroundColor: "#3387FF",
    width: "100%",
    borderBottomLeftRadius: "100%",
    borderBottomRightRadius: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  text: {
    fontSize: 28,
    fontWeight: 400,
  },
  containerCenter: {
    marginTop: 20,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  perfil: {
    overflow: "hidden",
    backgroundColor: "#fff",
    width: 150,
    height: 150,
    borderRadius: "100%",
    borderColor: "#ffffff",
    borderWidth: 2,
  },
  imagem: {
    width: "100%",
    height: "100%",
    // tintColor: '#9a9a9a'
  },
  button: {
    marginTop: 40,
    backgroundColor: "#66A5FF",
    borderRadius: 10,
    padding: 10,
    width: "50%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Perfil;
