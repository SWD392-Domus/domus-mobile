import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import "./ignoreWarnings";

export default function App() {
  return (
    <GluestackUIProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
