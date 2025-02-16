import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { UserProvider } from "./src/UserContext";
import {StatusBar} from 'react-native'
import { CategoryProvider } from "./src/CategoriesContext";
import "./global.css"

export default function App() {
  return (
    <CategoryProvider>
      <UserProvider>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent  />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </UserProvider>
    </CategoryProvider>
  );
}
