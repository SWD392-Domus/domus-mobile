import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import ProductListScreen from '../screens/ProductListScreen';
import CartScreen from '../screens/CartScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="home-screen" component={HomeScreen}/>
      <Stack.Screen name="Product Details" component={ProductDetailsScreen}/>
      <Stack.Screen name="product-screen" component={ProductListScreen}/>
    </Stack.Navigator>
  )
}

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="search-screen" component={SearchScreen}/>
    </Stack.Navigator>
  )
}

const CartStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="cart-screen" component={CartScreen}/>
      </Stack.Navigator>
    )
  }

  const OrderStackNavigator = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen name="order-screen" component={OrderScreen}/>
      </Stack.Navigator>
    )
  }

  const ProfileStackNavigator = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen name="profile-screen" component={ProfileScreen}/>
      </Stack.Navigator>
    )
  }

export {MainStackNavigator, CartStackNavigator, OrderStackNavigator, ProfileStackNavigator, SearchStackNavigator}