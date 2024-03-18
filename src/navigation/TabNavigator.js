import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ArticleStackNavigator,
  PackageStackNavigator,
  MainStackNavigator,
} from "./StackNavigator";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="package" component={PackageStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcon name="dns" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="article" component={ArticleStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcon name="book" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
