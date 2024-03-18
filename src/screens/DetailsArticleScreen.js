import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import RenderHtml from 'react-native-render-html';


const { width, height } = Dimensions.get("window");
const DetailsArticleScreen = () => {
  const navigation = useNavigation();
  const { params: item } = useRoute();
  // console.log("item", item);
  // const [visible, setVisible] = useState(false);
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
        <Text className="text-2xl font-bold">{item.title}</Text>
        <RenderHtml
          contentWidth={width}
          source={{ html: item.content }} />
      </ScrollView>
    </>
  );
};

export default DetailsArticleScreen;
