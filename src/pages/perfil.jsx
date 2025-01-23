import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUser } from "../UserContext";

const Perfil = ({ navigation }) => {
  const { nome, sexo } = useUser();
  return (
    <View style={styles.container}>
      <View style={styles.topBackground}></View>
      <View style={styles.containerCenter}>
        <View style={styles.perfil}></View>
      </View>
      <View style={styles.containerTexto}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>{nome}</Text>
        <Text style={styles.title}>Sexo</Text>
        <Text style={styles.text}>{sexo}</Text>
      </View>
      <TouchableOpacity style={[styles.button, styles.containerPerfil]} onPress={() => navigation.navigate('login')}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
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
    backgroundColor: "white",
    width: 150,
    height: 150,
    borderRadius: "100%",
    borderColor: "#ffffff",
    borderWidth: 2,
    boxShadow: "0px 0px 10px rgba(0, 81, 255, 0.74)",
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
