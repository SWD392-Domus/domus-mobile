import React from 'react'
import { Text, View } from 'react-native'

const PackageMiniHeader = ({ label }) => {
  return (
    <View className="px-4 my-4 justify-between flex-row items-center">
      <Text className="text-2xl text-black font-bold">{label}</Text>
    </View>
  )
}

export default PackageMiniHeader