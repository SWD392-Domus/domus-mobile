import React from 'react'
import { Dimensions, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get('window')

const PackageCard = ({ item, handleClick }) => {
  console.log("in card", item)
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <View className="relative">
        <Image
          source={{
            uri:
              item.packageImages[0].imageUrl ||
              "https://media.architecturaldigest.com/photos/62bcb8ce6cf27b95db3b09a9/16:9/w_2560%2Cc_limit/6-29%2520amazon%2520prime%2520upgrades%2520v1.jpg"
          }}
          style={{
            width: width * 0.8,
            height: height * 0.22,
          }}
          resizeMode="cover"
          className="rounded-3xl"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <View className="absolute bottom-6 left-4 justify-end h-[80%]">
          <View className=" space-y-1">
            <View className=" max-w-[98%]">
              <Text className="text-white text-base font-semibold capitalize">
                {item.name.length > 60
                  ? item.name.slice(0, 58) + "..."
                  : item.name.split("-")[0] || "N/A"}
              </Text>
            </View>

          </View>
        </View>
      </View>

    </TouchableWithoutFeedback>
  )
}

export default PackageCard