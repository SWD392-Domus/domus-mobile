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
import { WebView } from "react-native-webview";
import { useNavigation, useRoute } from "@react-navigation/native";
import RenderHtml from 'react-native-render-html';
import { SafeAreaView } from "react-native-safe-area-context";


const { width, height } = Dimensions.get("window");
const DetailsArticleScreen = () => {
    const navigation = useNavigation();
    const { params: item } = useRoute();
    console.log("item", item);
  const [visible, setVisible] = useState(false);
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
      {/* <WebView
        source={{ uri: "https://www.google.com" }}
        onLoadStart={() => setVisible(true)}
        onLoadEnd={() => setVisible(false)}
        style={{ flex: 1 }}/> */}
    <ScrollView className="p-4">
    <Text className="text-2xl font-bold">{item.title}</Text>
        <RenderHtml
        contentWidth={width}
        source={{ html: item.content }} />
      </ScrollView>
      
      {/* {visible && (
        <ActivityIndicator
          size={"large"}
          color={"yellow"}
          style={{
            position: "absolute",
            top: height / 2,
            left: width / 2,
          }}
        />
      )} */}
    </>
  );
};

export default DetailsArticleScreen;
