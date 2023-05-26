import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setResturant } from "../context/slices/resturantSlice";
import { urlFor } from "../constants/sanity";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import DishCard from "../components/ResturantScreen/DishCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Resturant = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
      _id,
      image,
      name,
      ratings,
      address,
      latitude,
      longitude,
      description,
      dishes,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setResturant({
        _id,
        image,
        name,
        ratings,
        address,
        latitude,
        longitude,
        description,
        dishes,
      })
    );
  }, []);

  return (
    <SafeAreaView className="relative">
      <StatusBar style="inverted" hidden={true} />
      <Image resizeMode="cover" source={{ uri: urlFor(image).url() }} className="w-full h-48" />
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        activeOpacity={0.7}
        className="bg-white p-2 rounded-full absolute top-7 left-5 "
      >
        <AntDesign name="arrowleft" size={24} color="red" />
      </TouchableOpacity>
      <ScrollView className="">
        <View className="p-2">
          <Text className="text-4xl font-bold">{name}</Text>
          <View className="flex-row space-x-2">
            <View className="flex-row gap-2 items-center">
              <Ionicons name="star" size={24} color="#fcc320" />
              <Text className=" text-gray-500 ">
                {ratings}
                <Text className="ml-4 text-gray-400"> • Offers</Text>
              </Text>
            </View>
            <View className="flex-row space-x-1 items-center overflow-hidden">
              <Ionicons name="location-outline" size={24} color="gray" />
              <Text className=" text-gray-500 ">
                Nearby
                <Text className="ml- text-sm text-gray-400"> • {address}</Text>
              </Text>
            </View>
          </View>
        </View>
        <View className="p-2 border-b-[0.8px] border-b-gray-500">
          <Text className="text-gray-500">{description}</Text>
        </View>
        <View className="p-3 border-b-[0.8px] border-b-gray-400">
          <Feather name="help-circle" size={20} color="gray" />
        </View>
        <View className="bg-gray-300  p-2 pb-[220px]">
          <Text className="text-2xl font-bold py-2 px-3">Menu</Text>
          {dishes.map((dish) => {
            const dishDetails = {
              name: dish.name,
              description: dish.description,
              price: dish.price,
              image: dish.image,
            };
            return <DishCard key={dish._id} {...dishDetails} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Resturant;
