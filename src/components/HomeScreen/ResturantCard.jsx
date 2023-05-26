import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../../constants/sanity";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ResturantCard = ({ resturant }) => {
  const { image, name, ratings, address } = resturant;

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate("RestaruntScreen", resturant);
      }}
    >
      <Image
        source={{ uri: urlFor(image).url() }}
        className="w-72 h-44 rounded-lg"
      />
      <Text className="text-xl font-bold">{name}</Text>
      <View className="flex-row gap-2 items-center">
        <Ionicons name="star" size={24} color="#fcc320" />
        <Text className=" text-gray-500 ">
          {ratings}
          <Text className="ml-4 text-gray-400"> • Offers</Text>
        </Text>
      </View>
      <View className="flex-row gap-2 items-center overflow-hidden">
        <Ionicons name="location-outline" size={24} color="gray" />
        <Text className=" text-gray-500 ">
          Nearby
          <Text className="ml-4 text-sm text-gray-400"> • {address}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
