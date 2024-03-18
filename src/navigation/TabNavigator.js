import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ArticleStackNavigator,
  CartStackNavigator,
  MainStackNavigator,
  ProfileStackNavigator,
  SearchStackNavigator,
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
      <Tab.Screen name="cart" component={CartStackNavigator} 
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcon name="shopping-cart" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name="search" component={SearchStackNavigator} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcon name="search" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen name="article" component={ArticleStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcon name="list-alt" size={size} color={color} />
          ),
        }}      
      />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcon name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
