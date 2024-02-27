import { View, Text, FlatList } from "react-native";
import { COLORS } from "../../../assets/constants";
import React from "react";
import ProductCardView from "./ProductCardView";

const ProductList = props => {
//   const products = [1, 2, 3, 4];
  return (
    <View className="mt-2">
      <FlatList
        data={props.products}
        horizontal
        contentContainerStyle={{ padding: 10, columnGap: 20}}
        renderItem={({ item }) => 
        <ProductCardView product={item}/>
        }
      />
    </View>
  );
};

export default ProductList;
