import React from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import RenderHtml from 'react-native-render-html';
import ProductList from "../components/packages/products/ProductList";

const { width, height } = Dimensions.get("window");
const DetailsArticleScreen = () => {
  const navigation = useNavigation();
  const { params: item } = useRoute();
  console.log("item", item);
  return (
    <>
      <View
        className="w-full flex-row justify-between items-center px-4 pt-10
    pb-4 bg-white
    "
      >
        <View className="bg-gray-100 p-2 rounded-full items-center justify-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcon
              name="arrow-back"
              strokeWidth={3}
              size={25}
              color={"#000"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="p-4">
        <Text className="text-2xl font-bold mb-2">{item.name}</Text>
        <Text className="text-xl font-semibold">Products in Package</Text>
        <ProductList products={item.productDetails} />
        <RenderHtml
          contentWidth={width}
          source={{ html: item.description }} />
        <Text className="text-xl font-semibold">Services in Package</Text>
        <View className="mt-2 mb-10">
          <FlatList
            data={item.services}
            horizontal
            contentContainerStyle={{ padding: 10, columnGap: 20 }}
            renderItem={({ item }) =>
              <Text className="text-sm font-semibold">{item.name}</Text>
            }
          />
        </View>
      </ScrollView>
    </>
  );
};

export default DetailsArticleScreen;
