import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { UserProvider } from "./src/UserContext";
import {StatusBar} from 'react-native'
export default function App() {
  return (
    <UserProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent  />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </UserProvider>
  );
}
