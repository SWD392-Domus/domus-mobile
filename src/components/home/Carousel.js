import { View, Text } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import { picture1, picture2, picture3, picture4, picture5 } from '../../../assets/images'
import { COLORS } from "../../../assets/constants"
import React from 'react'

const Carousel = () => {
  // console.log(COLORS.primary);
  const slides = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5
  ]
  return (
    <View className="flex-1 items-center">
      <SliderBox images={slides} autoplay circleLoop
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.white}
        ImageComponentStyle={{ borderRadius: 15, width: "93%", marginTop: 15, }}
      />
    </View>
  )
}

export default Carousel