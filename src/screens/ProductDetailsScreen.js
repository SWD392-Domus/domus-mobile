import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useRoute } from '@react-navigation/native';
import React from 'react'
import { COLORS } from '../../assets/constants';

const ProductDetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const product = route.params;
  const { productName, brand, details, description } = product.product;
  const images = details.flatMap(detail => detail.images.map(image => image.imageUrl));

  const groupedAttributes = {};

  details.forEach(detail => {
    detail.attributes.forEach(attribute => {
      if (groupedAttributes.hasOwnProperty(attribute.name)) {
        groupedAttributes[attribute.name].push(attribute.value);
      } else {
        groupedAttributes[attribute.name] = [attribute.value];
      }
    });
  });

  // Convert the groupedAttributes object into an array of objects
  const groupedAttributesArray = Object.keys(groupedAttributes).map(name => ({
    name: name,
    value: groupedAttributes[name]
  }));

  return (
    <View className="flex-1 bg-white">
      <View className="mx-5 flex-row justify-between items-center 
      absolute top-10 z-50 
      ">
        <TouchableOpacity onPress={() => navigation.goBack()}
          className="pt-2">
          <MaterialIcons name="arrow-back" size={30} />
        </TouchableOpacity>
      </View>
      <SliderBox images={images} autoplay circleLoop
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.white}
        ImageComponentStyle={{
          borderRadius: 15, width: "100vw", height: 400,
          marginTop: 30, aspectRatio: 16 / 9, objectFit: "contain"
        }}
      />

      <ScrollView className="bg-white rounded-t-3xl -mt-5 w-screen">
        <View className="mx-5 pb-2 flex-row 
        justify-between items-center top-5">
          <Text numberOfLines={1} className="font-extrabold text-xl w-[60%]">
            {productName}
          </Text>
        </View>

        <View className="px-5 pt-6 flex-row w-full gap-2 items-center">
          <Text className="font-semibold text-lg">Brand</Text>
          {brand ? <Text>{brand}</Text> : <Text className>No brand</Text>}
        </View>
        <View>
          <Text className="px-5 pt-3 font-semibold text-lg">Description</Text>
          {description ? (
            <Text className="px-5 pt-2 text-slate-500">
              {description}
            </Text>
          ) : (
            <Text className="px-5 pt-2 text-slate-500">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          )}

        </View>
        {groupedAttributesArray && groupedAttributesArray.map((attribute) => {
          return (
            <View className="px-5 py-3" key={attribute.name}>
              <Text className="font-semibold text-lg pb-2">{attribute.name}</Text>
              <View className="flex-row flex-wrap gap-2">
                {attribute.value.map((value, index) => (
                  <View className="bg-gray-200 px-2 py-1 rounded-3xl" key={index}>
                    <Text>{value}</Text>
                  </View>
                ))}
              </View>
            </View>
          )
        })}
        <View></View>
      </ScrollView>
    </View>
  )
}

export default ProductDetailsScreen

