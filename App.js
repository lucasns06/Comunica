import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { UserProvider } from "./src/UserContext";
export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </UserProvider>
  );
}
