import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const PackageSection = ({ data, label }) => {
  function formatDate(isoDate) {
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, options);
  }
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate("PackageDetails", item);
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
            source={{
              uri:
                item.packageImages[0].imageUrl ||
                "https://media.architecturaldigest.com/photos/62bcb8ce6cf27b95db3b09a9/16:9/w_2560%2Cc_limit/6-29%2520amazon%2520prime%2520upgrades%2520v1.jpg"
            }}
            style={{
              width: hp(9),
              height: hp(10),
            }}
          />
          <View className="w-[70%] pl-4 justify-center space-y-1">
            <Text className="text-sm font-semibold text-gray-900 dark:text-neutral-300">
              Domus
            </Text>
            <Text
              className="text-neutral-800 capitalize max-w-[90%] font-bold text-xl "
              style={{
                fontSize: hp(2),
              }}
            >
              {item.name.length > 50
                ? item.name.slice(0, 50) + "..."
                : item.name}
            </Text>

            <Text className="text-xs text-gray-700 dark:text-neutral-300">
              {formatDate(new Date())}
            </Text>
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

export default PackageSection;
