import * as Speech from 'expo-speech';
import React, { useState } from "react"
import { StyleSheet, Image, TextInput, TouchableOpacity, View } from "react-native"
import LottieView from 'lottie-react-native';

const Tts = () => {
    const [text, setText] = useState('');
    const [isSpeaking, setIsSpeaking] = useState(false);

    const speak = () => {
        if (text) {
            setIsSpeaking(true);
            Speech.speak(text, {
                onDone: () => setIsSpeaking(false),
                onStart: () => setIsSpeaking(true),
            });
        }
    };

    const deleteSpeak = () => {
        setText('');
        setIsSpeaking(false);
    };

    return (
        <View style={styles.container}>
            <LottieView
                source={require('../images/gifs/VoiceCommand.json')}
                autoPlay={isSpeaking}
                loop={isSpeaking}
                style={styles.logo}
            />
            <TextInput
                style={styles.textInput}
                value={text}
                onChangeText={setText}
                placeholder="Digite o que sentir"
            />
            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={[styles.iconButton, styles.deleteButton]}
                    onPress={deleteSpeak}
                >
                    <Image source={require('../images/error.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={speak}
                >
                    <Image source={require('../images/sound.png')} style={styles.iconImage} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textInput: {
        width: '100%',
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 18,
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignItems: 'center',
    },
    iconButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5DF991',
        borderRadius: 30,
    },
    deleteButton: {
        backgroundColor: '#F97D7D',
    },
    iconImage: {
        width: 30,
        height: 30,
    },
    logo: {
        width: 200,
        height: 200
    }
});

export default Tts;
