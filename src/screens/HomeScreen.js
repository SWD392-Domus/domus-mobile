import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const HomeScreen = ({navigation}) => {

    useEffect(() => {
       navigation.setOptions({
        headerShown:false
       })
    }, [])
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex">
        <View className="bg-black w-10 h-10">
            <MaterialIcons name="menu" size={24} color={"#111"}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
