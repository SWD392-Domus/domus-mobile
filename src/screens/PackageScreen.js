import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import PackageMiniHeader from "../components/packages/PackageMiniHeader";
import PackageSlider from "../components/packages/PackageSlider";
import axiosCall from "../utils/api/axios";
import PackageSection from "../components/packages/PackageSection";

const PackageScreen = () => {
  const [packages, setPackages] = useState([]);
  const searchField = "title";
  const Descending = false;
  const PageSize = 100;
  const PageIndex = 1;
  const fetchData = async () => {
    try {
      const res = await axiosCall(`/Packages/search?SearchField=${searchField}&SearchValue=&SortField=&Descending=${Descending}&PageSize=${PageSize}&PageIndex=${PageIndex}`);
      const response = res.data
      // console.log("response", response)
      if (response.isSuccess) {
        setPackages(response.data.items)
      }

    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1">
      <View>
        <PackageMiniHeader label="Packages" />
        <PackageSlider label="Packages" data={packages} />
      </View>
      <View>
        <PackageMiniHeader label="Recommend packages" />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: hp(80),
          }}
        >
          <PackageSection label="Recommended" data={packages} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default PackageScreen

const styles = StyleSheet.create({})