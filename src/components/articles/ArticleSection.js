import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import domuslogo from "../../../assets/images/domuslogo.png";

const ArticleSection = ({ data, label }) => {
  // function formatDate(isoDate) {
  //   const options = {
  //     weekday: "short",
  //     day: "2-digit",
  //     month: "short",
  //     year: "numeric",
  //   };
  //   const date = new Date(isoDate);
  //   return date.toLocaleDateString(undefined, options);
  // }
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate("ArticleDetails", item);
  };
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        className="mb-4 mx-4 space-y-1"
        key={index}
        onPress={() => handleClick(item)}
      >
        <View className="flex-row justify-start w-full shadow-sm">
          <Image
            source={domuslogo}
            style={{
              width: hp(9),
              height: hp(10),
            }}
          />
          <View className="w-[70%] pl-4 justify-center space-y-1">
            <Text className="text-sm font-semibold text-gray-900 dark:text-neutral-300">
              Domus Article
            </Text>
            <Text
              className="text-neutral-800 capitalize max-w-[90%] font-bold text-xl "
              style={{
                fontSize: hp(2),
              }}
            >
              {item.title.length > 50
                ? item.title.slice(0, 50) + "..."
                : item.title}
            </Text>

            {/* <Text className="text-xs text-gray-700 dark:text-neutral-300">
              {formatDate(new Date())}
            </Text> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View className="space-y-2 bg-white">
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ArticleSection;
