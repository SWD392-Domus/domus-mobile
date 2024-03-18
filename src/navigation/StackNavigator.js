import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import ProductListScreen from '../screens/ProductListScreen';
// import CartScreen from '../screens/CartScreen';
import PackageScreen from '../screens/PackageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import ArticleScreen from '../screens/ArticleScreen';
import DetailsArticleScreen from '../screens/DetailsArticleScreen';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
      <Stack.Screen name="product-screen" component={ProductListScreen} />
    </Stack.Navigator>
  )
}

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="search-screen" component={SearchScreen} />
    </Stack.Navigator>
  )
}

const PackageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="package-screen" component={PackageScreen} />
    </Stack.Navigator>
  )
}

const ArticleStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="article-screen" component={ArticleScreen} />
      <Stack.Screen name="ArticleDetails" component={DetailsArticleScreen} />
    </Stack.Navigator>
  )
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profile-screen" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator, PackageStackNavigator, ArticleStackNavigator, ProfileStackNavigator, SearchStackNavigator }