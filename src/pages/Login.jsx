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
  // const [sexo, setSexoLocal] = useState("");
  const [nome, setNomeLocal] = useState("");
  const [erro, setErro] = useState("");
  // const [erro2, setErro2] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

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
    // let sexoValido = true;

    if (!nome.trim()) {
      setErro("Por favor digite um nome valido!");
      nomeValido = false;
    }

    // if (!sexo) {
    //   setErro2("Por favor Selecione um sexo!");
    //   sexoValido = false;
    // }

    // if (nomeValido && sexoValido) {
    //   setUser({ nome, sexo }); 
    //   navigation.navigate("home");
    // }
    if (nomeValido) {
      setUser({ nome });
      navigation.navigate("home");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3387FF" translucent />
      <View style={styles.center}>
        <LottieView
          source={require("../images/gifs/Gif.json")}
          autoPlay
          loop
          style={styles.logo}
        />
        <Text style={styles.title}>Bem-Vindo!</Text>
        <Text style={styles.label}>Digite seu nome</Text>
        <TextInput
          className="px-2 py-4 text-black font-psemibold text-2xl bg-white rounded-2xl w-full border-2 border-gray-200 focus:border-sky-400"
          placeholder="Nome"
          value={nome}
          onChangeText={setNomeLocal}
          onPress={() => clearWarning("erro1")}
        />
        <Text style={styles.warning}>{erro}</Text>
        {/* 
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
          <Text style={styles.warning}>{erro2}</Text> */}
        <TouchableOpacity
          className="w-full px-2 py-4 rounded-2xl shadow-2xl"
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => verificar()}
        >
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
  },
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
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
    marginBottom: 10,
    color: "black",
    fontSize: 22,
  },
  picker: {
    fontSize: 18,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    width: "97%",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
  },
  button: {
    marginTop: 40,
    backgroundColor: "#66A5FF",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default Login;
