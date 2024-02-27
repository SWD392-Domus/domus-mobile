import { View, Text, TextInput } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from 'react-native-safe-area-context'

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-5">
        <View className="flex-row bg-gray-200 p-2 px-3 items-center rounded-3xl">
          <View>
            <MaterialIcons name="search" size={24} color={"#000"} />
          </View>
          <TextInput
            onPressIn={() => console.log("search")}
            placeholder="Search.."
            placeHolderTextColor={"#666666"}
            className="px-2"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen