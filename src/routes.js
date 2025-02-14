import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Config from "./pages/Config";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import AddImage from "./pages/AddImage";
import Help from "./pages/Help";
import Tts from "./pages/tts";
import Perfil from "./pages/perfil";
import DynamicCategoryScreen from './pages/DynamicCategoryScreen'
import { useUser } from './UserContext';
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
          // backgroundColor: "#F1F1F1",
          backgroundColor: "#fff",
          height: 55,
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px"
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
              style={{marginRight: '20%'}}
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
  const { user } = useUser();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
      initialRouteName={!user ? "login" : "home"}
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
        name="CategoryScreen" 
        component={DynamicCategoryScreen}
        options={{
          headerTitle: 'Imagens',
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "#4D4D58",
          headerTitleStyle: styles.headerTitleStyle,
        }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    // backgroundColor: "#F1F1F1",
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
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
