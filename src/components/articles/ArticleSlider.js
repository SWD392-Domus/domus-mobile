import React from 'react'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import ArticleCard from './ArticleCard'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')
const ArticleSlider = ({data,label}) => {
    const navigation= useNavigation();
    const handleClick = (item) => {
        navigation.navigate('ArticleDetails',item)
    }
  return (
    <View>
        <Carousel
        data={data}
        renderItem={({ item }) => (
            <ArticleCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width *0.8}
        slideStyle={{display:'flex',alignItems:'center'}}
        
        />
    </View>
  )
}

export default ArticleSlider