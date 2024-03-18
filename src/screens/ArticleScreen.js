import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
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
      const response = res.data
      // console.log("response", response)
      if (response.isSuccess) {
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
      <View>
        <ArticleMiniHeader label="Articles" />
        <ArticleSlider label="Articles" data={articles} />
      </View>
      <View>
        <ArticleMiniHeader label="Recommend articles" />
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