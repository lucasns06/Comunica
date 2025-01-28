import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Config from "./pages/Config";
import Roupas from "./pages/categorias/Roupas";
import Emocoes from "./pages/categorias/Emocoes";
import Necessidades from "./pages/categorias/Necessidades";
import Social from "./pages/categorias/Social";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import AddImage from "./pages/AddImage";
import Help from "./pages/Help";
import Tts from "./pages/tts";
import Perfil from "./pages/perfil";
import DynamicCategoryScreen from './pages/DynamicCategoryScreen'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#5A76FF",
        tabBarInactiveTintColor: "#4D4D58",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: "#F1F1F1",
          height: 55,
        },
        contentStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Tab.Screen
        name="Categorias"
        component={Home}
        options={{
          tabBarLabel: "Categorias",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={28}
              style={{ color: focused ? "#5A76FF" : "#4D4D58" }}
            />
          ),
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "#4D4D58",
          headerTitleStyle: styles.headerTitleStyle,
          headerRight: () => (
            <Ionicons
              name="options"
              size={40}
              color={"black"}
              onPress={() => navigation.navigate("config")}
              style={{marginRight: '24%'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Personalizar"
        component={Edit}
        options={{
          tabBarLabel: "Personalizar",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="edit"
              size={28}
              style={{ color: focused ? "#5A76FF" : "#4D4D58" }}
            />
          ),
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "#4D4D58",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={28}
              style={{ color: focused ? "#5A76FF" : "#4D4D58" }}
            />
          ),
          headerTitle: "Perfil",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle2,
          headerTintColor: "white",
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
          backgroundColor: "#FFFFFF",
        },
      }}
      initialRouteName="home"
    >
      <Stack.Screen
        name="config"
        component={Config}
        options={{
            headerTitle: "Configurações",
            headerTitleAlign: "center",
            headerTitleStyle: styles.headerTitleStyle,
          }}
      />
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
          headerTitle: "Ajuda",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "#4D4D58",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Stack.Screen
        name="tts"
        component={Tts}
        options={{
          headerTitle: "Sintese de Voz",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "#4D4D58",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Stack.Screen
        name="add"
        component={Add}
        options={{
          headerTitle: "Adicionar Categoria",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "#4D4D58",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Stack.Screen
        name="addImage"
        component={AddImage}
        options={{
          headerTitle: "Adicionar Imagem",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "#4D4D58",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Stack.Screen
        name="roupas"
        component={Roupas}
        options={{
          headerTitle: "Roupas",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "#4D4D58",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Stack.Screen
        name="emocoes"
        component={Emocoes}
        options={{
          headerTitle: "Emoções",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "#4D4D58",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Stack.Screen
        name="necessidades"
        component={Necessidades}
        options={{
          headerTitle: "Necessidades",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "#4D4D58",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Stack.Screen
        name="social"
        component={Social}
        options={{
          headerTitle: "Social",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "#4D4D58",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Stack.Screen 
        name="CategoryScreen" 
        component={DynamicCategoryScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F1F1F1",
    elevation: 0,
  },
  headerStyle2: {
    backgroundColor: "#3387FF",
    elevation: 0,
  },
  headerTitleStyle: {
    fontSize: 28,
    fontWeight: "400",
  },
});

export default Routes;
