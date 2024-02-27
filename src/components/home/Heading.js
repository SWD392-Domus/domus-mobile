import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { COLORS } from "../../../assets/constants";

const Heading = () => {
  return (
    <View className="mt-4 mx-4 ">
      <View className="flex-row justify-between">
        <Text className="font-semibold text-xl">New Arrivals</Text>
        <TouchableOpacity>
            <MaterialIcon name="grid-view" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
