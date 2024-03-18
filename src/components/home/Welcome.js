import { StyleSheet, Text, TextInput, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { useNavigation } from '@react-navigation/native'
import React from "react";

const Welcome = () => {
  // const [searchInput, setSearchInput] = useState("");
  // const navigation = useNavigation();
  return (
    <View>
      <View className="w-full mb-7">
        <Text className="font-extrabold text-4xl mt-5 ml-4">Domus</Text>
        <Text className="font-bold text-4xl mt-2 ml-4 text-yellow-500">
          Luxurious Furniture
        </Text>
      </View>

      {/* <View className="mt-6 px-5">
        <View className="flex-row bg-gray-200 p-2 px-3 items-center rounded-3xl">
          <View>
            <MaterialIcons name="search" size={24} color={"#000"} />
          </View>
          <TextInput
            onPressIn={() => navigation.navigate('search-screen')}
            placeholder="Search.."
            placeHolderTextColor={"#666666"}
            className="px-2"
          />
        </View>
      </View> */}
    </View>
  );
};

export default Welcome;
