import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import UserLogo from "../../assets/user.png";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ArticleMiniHeader from "../components/articles/ArticleMiniHeader";
import ArticleSlider from "../components/articles/ArticleSlider";
import axiosCall from "../utils/api/axios";
import ArticleSection from "../components/articles/ArticleSection";

const ArticleScreen = () => {
  const [articles, setArticles] = useState([]);
  const searchField = "title";
  const Descending = false;
  const PageSize = 100;
  const PageIndex = 1;
  const fetchData = async () => {
    try {
      const res = await axiosCall(`/Articles/search?SearchField=${searchField}&SearchValue=&SortField=&Descending=${Descending}&PageSize=${PageSize}&PageIndex=${PageIndex}`);
      const response= res.data
      console.log("response",response)
      if(response.isSuccess){
        setArticles(response.data.items)
      }
      
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-row px-5 mt-6 justify-between items-center">
        <View className="bg-black w-10 h-10 flex-row justify-center items-center rounded-full">
          <MaterialIcons name="menu" size={24} color={"#fff"} />
        </View>
        <Pressable
          className="flex-row justify-center items-center 
        border border-slate-400 rounded-full"
        >
          <Image source={UserLogo} className="h-12 w-12" />
          <Text className="font-semibold py-2 pr-4 pl-2">Login</Text>
        </Pressable>
      </View>
      <View>
        <ArticleMiniHeader label="Articles"/>
      <ArticleSlider label="Articles" data={articles}/>
      </View>
      <View>
      <ArticleMiniHeader label="Recommend articles"/>
      <ScrollView
      contentContainerStyle={{
        paddingBottom: hp(80),
      }}
      >
        <ArticleSection label="Recommended" data={articles} />
      </ScrollView>
      </View>
</SafeAreaView>
  )
}

export default ArticleScreen

const styles = StyleSheet.create({})