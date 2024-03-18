import React from 'react'
import { Text, View } from 'react-native'

const ArticleMiniHeader = ({label}) => {
  return (
    <View className="px-4 my-4 justify-between flex-row items-center">
        {/* <Text className="font-extrabold text-4xl mt-5 ml-4">Domus</Text> */}
        <Text className="text-2xl text-black font-bold">{label}</Text>
        <Text className="text-gray-500 font-bold">View All</Text>
    </View>
  )
}

export default ArticleMiniHeader