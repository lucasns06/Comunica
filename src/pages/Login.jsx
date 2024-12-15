import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
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
} from 'react-native';
import LottieView from 'lottie-react-native';

function Login({ navigation }){
  const [sexo, setSexo] = useState('');
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="white"  />
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          {/* <Image style={styles.logo} source={require('../images/logoAplicativo.png')} /> */}
          <LottieView
            source={require('../images/gifs/Gif.json')}  // animação em formato JSON
            autoPlay
            loop
            style={styles.logo}
          />
          <Text style={styles.title}>Bem-Vindo!</Text>
          <Text style={styles.label}>Digite seu nome</Text>
          <TextInput style={styles.input} placeholder="Nome" />
          <Text style={styles.label}>Escolha seu sexo</Text>
          <Picker
            style={styles.picker}
            selectedValue={sexo}
            onValueChange={(itemValue) => setSexo(itemValue)}
          >
            <Picker.Item label="Selecione..." value="" />
            <Picker.Item label="Masculino" value="masculino" />
            <Picker.Item label="Feminino" value="feminino" />
          </Picker>
          <View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7} 
              onPress={() => navigation.navigate('home')}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center', 
    width: 200,
    height: 200,
  },
  title: {
    textAlign: 'center',
    fontSize: 52,
    color: '#191919',
    marginVertical: 20,
  },
  label: {
    marginTop: 30,
    color: 'black',
    fontSize: 22,
  },
  input: {
    marginTop: 10,
    fontSize: 18,
    backgroundColor: '#F5F5F6',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },
  picker: {
    marginTop: 10,
    fontSize: 18,
    backgroundColor: '#F5F5F6',
    borderRadius: 10,
    width: '100%',
  },
  button: {
    marginTop: 40,
    backgroundColor: '#66A5FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Login;