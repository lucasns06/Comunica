import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import Home from './pages/Home';
import Login from './pages/Login';
import Config from './pages/Config';
import Roupas from './pages/categorias/Roupas';
import Emocoes from './pages/categorias/Emocoes';
import Necessidades from './pages/categorias/Necessidades';
import Social from './pages/categorias/Social';
import Edit from './pages/Edit';
import Add from './pages/Add';
import AddImage from './pages/AddImage';
import Help from './pages/Help';
import Tts from './pages/tts';
import Perfil from './pages/perfil';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#5A76FF',
                tabBarInactiveTintColor: '#4D4D58',
                tabBarLabelStyle:{
                    fontSize: 12,
                },
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 2,
                    borderColor: '#888888',
                    height: 55
                },
                contentStyle: {
                    backgroundColor: '#FFFFFF',
                },  
            }}
        >
            <Tab.Screen
                name="Categorias"
                component={Home}
                options={{
                    tabBarLabel: 'Categorias',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={[styles.icon, { tintColor: focused ? '#5A76FF' : '#4D4D58' }]}
                            source={require('./images/home.png')}
                        />
                    ),
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#4D4D58',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
            <Tab.Screen
                name="Configurações"
                component={Config}
                options={{
                    tabBarLabel: 'Configurações',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={[styles.icon, { tintColor: focused ? '#5A76FF' : '#4D4D58' }]}
                            source={require('./images/config.png')}
                        />
                    ),
                    headerTitle: 'Configurações',
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#4D4D58',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
            <Tab.Screen
                name="Personalizar"
                component={Edit}
                options={{
                    tabBarLabel: 'Personalizar',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={[styles.icon, { tintColor: focused ? '#5A76FF' : '#4D4D58' }]}
                            source={require('./images/personalizar.png')}
                        />
                    ),
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#4D4D58',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={[styles.icon, { tintColor: focused ? '#5A76FF' : '#4D4D58' }]}
                            source={require('./images/user.png')}
                        />
                    ),
                    headerTitle: 'Perfil',
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle2,
                    headerTintColor: 'white',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
        </Tab.Navigator>
    );
}

function Routes() {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: {
                    backgroundColor: '#FFFFFF',
                },
            }}
            initialRouteName="home"
        >
            <Stack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="home"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="help"
                component={Help}
                options={{
                    headerTitle: 'Ajuda',
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#4D4D58',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
            <Stack.Screen
                name="tts"
                component={Tts}
                options={{
                    headerTitle: 'Sintese de Voz',
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#4D4D58',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
            <Stack.Screen
                name="add"
                component={Add}
                options={{
                    headerTitle: 'Adicionar Categoria',
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#4D4D58',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
            <Stack.Screen
                name="addImage"
                component={AddImage}
                options={{
                    headerTitle: 'Adicionar Imagem',
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#4D4D58',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
            <Stack.Screen
                name="roupas"
                component={Roupas}
                options={{
                    headerTitle: 'Roupas',
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#4D4D58',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
            <Stack.Screen
                name="emocoes"
                component={Emocoes}
                options={{
                    headerTitle: 'Emoções',
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#4D4D58',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
            <Stack.Screen
                name="necessidades"
                component={Necessidades}
                options={{
                    headerTitle: 'Necessidades',
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#4D4D58',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
            <Stack.Screen
                name="social"
                component={Social}
                options={{
                    headerTitle: 'Social',
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#4D4D58',
                    headerTitleStyle: styles.headerTitleStyle,
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: 'white',
        elevation: 0
    },
    headerStyle2: {
        backgroundColor: '#3387FF',
        elevation: 0
    },
    headerTitleStyle: {
        fontSize: 32,
        fontWeight: '400',
    },
    icon: {
        width: 40,
        height: 40,
    },
});

export default Routes;
