import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import Heading from "../components/home/Heading";
import ProductList from "../components/products/ProductList";
import axiosCall from "../utils/api/axios";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(12);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    const fetchProducts = async () => {
      try {
        const response = await axiosCall(`/Products?PageSize=${pageSize}&PageIndex=${pageIndex}`);
        setProducts(response.data.data.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductList products={products} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
