import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import UserLogo from "../../assets/user.png";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import Heading from "../components/home/Heading";
import ProductList from "../components/products/ProductList";
import ProductCardView from "../components/products/ProductCardView";
import axiosCall from "../utils/api/axios";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [pageSize, setPageSize] = useState(12);
  const [pageIndex, setPageIndex] = useState(1);

//  const path = "https://domus.io.vn/api"
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    const fetchProducts = async () => {
      try {
        // const response = await axios.get(`${path}/Products?PageSize=${pageSize}&PageIndex=${pageIndex}`);
        const response = await axiosCall(`/Products?PageSize=${pageSize}&PageIndex=${pageIndex}`);
        // if(response.data.length > 0){
        //   console.log(response.data.data.items)
        // }
        setProducts(response.data.data.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-row px-5 mt-6 justify-between items-center">
        <View className="bg-black w-10 h-10 flex-row justify-center items-center rounded-full">
          <MaterialIcons name="menu" size={24} color={"#fff"} />
        </View>
        <Pressable
          className="flex-row justify-center items-center 
        border border-slate-400 rounded-full"
        >
          <Image source={UserLogo} className="h-12 w-12" />
          <Text className="font-semibold py-2 pr-4 pl-2">Login</Text>
        </Pressable>
      </View>

      {/* <View className="mt-6 px-5">
        <Text className="font-bold text-2xl">Welcome, user</Text>
        <Text className="font-bold text-xl text-gray-500">
          Our interior app
        </Text>
      </View>
      <View className="mt-6 px-5">
        <View className="flex-row bg-gray-200 p-2 px-3 items-center rounded-3xl">
          <View>
            <MaterialIcons name="search" size={24} color={"#000"} />
          </View>
          <TextInput
            placeholder="Search.."
            placeHolderTextColor={"#666666"}
            className="px-2"/>
        </View>
      </View> */}
      {/* <View>
        <OfferCard/>
      </View> */}

      <ScrollView>
        <Welcome/>
        <Carousel/>
        <Heading/>
        <ProductList products={products}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
