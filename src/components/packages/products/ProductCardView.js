import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const ProductCardView = prop => {
    const { productName, quantity, images } = prop.product;
    // console.log(product)
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Product Details', prop)
        }}>
            <View className="w-[182px] h-[240px] me-[22px] rounded-xl
        bg-slate-100
        ">
                <View className="flex-1 w-[170px] ml-2 mt-2 rounded-xl
            overflow-hidden
            ">
                    <Image
                        className="aspect-square object-cover"
                        source={{ uri: images[0].imageUrl }}
                    />
                </View>
                <View className="p-2">
                    <Text numberOfLines={1} className="font-bold text-xl">
                        {productName}
                    </Text>
                    <Text numberOfLines={1} className="text-slate-500 text-sm font-semibold">
                        {quantity}
                    </Text>
                    {/* <Text className="text-lg font-semibold">
                        ${details[0].displayPrice}
                    </Text> */}
                </View>
                <TouchableOpacity className="">

                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCardView