import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// Icons
import { Ionicons, Feather } from "@expo/vector-icons";
import {} from "@expo/vector-icons";
import client from "../constants/sanity";
import Categories from "../components/HomeScreen/Categories";
import Featured from "../components/HomeScreen/Featured";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, SetFeaturedCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type=='featured']{
        ...,
        resturant[]->{
          ...,
          dishes[]-> 
        }
      }
    `
      )
      .then((data) => SetFeaturedCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView className=" pt-5 ">
      <View className="flex-row pb-3 items-center mx-3 space-x-2">
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
          }}
          className="h-14 w-14 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <Feather name="chevron-down" size={20} color="#E33342" />
          </Text>
        </View>
        <Ionicons name="person-outline" size={35} color="#E33342" />
      </View>

      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="flex-row items-center rounded-lg space-x-2 flex-1 bg-gray-200 p-3 relative">
          <Ionicons name="search-outline" size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            className="text-lg w-full "
          />
        </View>
        <Feather name="sliders" size={20} color="#E33342" />
      </View>
      <ScrollView>
        <Categories />

        <ScrollView contentContainerStyle={{ marginBottom: 150 }}>
          {featuredCategories.map((featured) => (
            <Featured
              key={featured._id}
              name={featured.name}
              description={featured.description}
              id={featured._id}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
