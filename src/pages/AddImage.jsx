import { Picker } from "@react-native-picker/picker";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function AddImage(){
    return (
        <View style={styles.container} >
            <Image source={require('../images/personalizar/image.png')} style={styles.imagem} />
            <Text style={styles.texto}>Imagem</Text>
            <TouchableOpacity style={[styles.button, styles.um]}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input} placeholder="Nome da imagem" />
            <Text style={styles.label}>Escolha a categoria</Text>
            <Picker style={styles.input}  >
                <Picker.Item label="Selecione..." value="" />
                {/* categorias */}
            </Picker>
            <Text style={styles.label}>Cor de fundo (Opcional)</Text>
            <Picker style={styles.input}  >
                <Picker.Item label="Selecione..." value="" />
                <Picker.Item label="Branco" value="#fff" />
                <Picker.Item label="Vermelho" value="#F97D7D" />
                <Picker.Item label="Verde" value="#4AE9A7" />
                <Picker.Item label="Azul" value="#7FAFF6" />
                <Picker.Item label="Roxo" value="#9D7FF6" />
            </Picker>
            <TouchableOpacity style={[styles.button, styles.dois]}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    um:{
        backgroundColor: '#2C36FA',
    },
    dois:{
        backgroundColor: '#51D93F',
    },
    container: {
        margin: 20
    },
    label: {
        marginTop: 30,
        color: 'black',
        fontSize: 22
    },
    input: {
        marginTop: 10,
        fontSize: 22,
        backgroundColor: '#F5F5F6',
        borderRadius: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black'
    },
    texto: {
        textAlign: 'center',
        color: 'black',
        fontSize: 28
    },
    button: {
        margin: 'auto',
        width: 150,
        marginTop: 40,
        padding: 2,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 28,
    },
    imagem: {
        width: 100,
        height: 100,
        margin: 'auto'
    }

})
export default AddImage;