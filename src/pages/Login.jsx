import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from "lottie-react-native";
import { useUser } from "../UserContext";

function Login({ navigation }) {  
  const { setUser } = useUser(); 
  const [sexo, setSexoLocal] = useState("");
  const [nome, setNomeLocal] = useState("");
  const [erro, setErro] = useState("");
  const [erro2, setErro2] = useState("");

  function clearWarning(opcao) {
    if (opcao == "erro1") {
      setErro("");
    }
    if (opcao == "erro2") {
      setErro2("");
    }
  }
  function verificar() {
    let nomeValido = true;
    let sexoValido = true;

    if (!nome.trim()) {
      setErro("Por favor digite um nome valido!");
      nomeValido = false;
    }

    if (!sexo) {
      setErro2("Por favor Selecione um sexo!");
      sexoValido = false;
    }

    if (nomeValido && sexoValido) {
      setUser({ nome, sexo }); 
      navigation.navigate("home");
    }
  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <LottieView
            source={require("../images/gifs/Gif.json")} 
            autoPlay
            loop
            style={styles.logo}
          />
          <Text style={styles.title}>Bem-Vindo!</Text>
          <Text style={styles.label}>Digite seu nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNomeLocal}
            onFocus={() => clearWarning("erro1")}
          />

          <Text style={styles.warning}>{erro}</Text>

          <Text style={styles.label}>Selecione seu sexo</Text>
          <Picker
            style={styles.picker}
            selectedValue={sexo}
            onValueChange={(itemValue) => [
              setSexoLocal(itemValue),
              clearWarning("erro2"),
            ]}
          >
            <Picker.Item label="Selecione..." value="" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
          </Picker>
          <Text style={styles.warning}>{erro2}</Text>
          <View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => verificar()}
            >
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    marginTop: 20,
  },
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  warning: {
    color: "red",
    fontSize: 18,
  },
  logo: {
    alignSelf: "center",
    width: 200,
    height: 200,
  },
  title: {
    textAlign: "center",
    fontSize: 52,
    color: "#191919",
    marginVertical: 20,
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
    width: "100%",
  },
  picker: {
    marginTop: 10,
    fontSize: 18,
    backgroundColor: "#F5F5F6",
    borderRadius: 10,
    width: "100%",
  },
  button: {
    marginTop: 40,
    backgroundColor: "#66A5FF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Login;
