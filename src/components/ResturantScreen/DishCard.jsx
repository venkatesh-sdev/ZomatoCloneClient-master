import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../../constants/sanity";
import { AntDesign } from "@expo/vector-icons";

const DishCard = ({ name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  const items = [];

  return (
    <View className="p-2  rounded-lg justify-between bg-white mt-2 flex-1">
      <TouchableOpacity
        className="flex-row items-center"
        onPress={() => setIsPressed((prev) => !prev)}
      >
        <View className="flex-[0.8] pr-3">
          <Text className="text-xl font-medium">{name}</Text>
          <Text className="text-justify">{description}</Text>
          <Text className="font-bold text-lg">₹ {price.toFixed(2)}</Text>
        </View>
        <View className="flex-[0.2]">
          <Image
            className="w-16 h-16 rounded-lg "
            resizeMode="contain"
            source={{ uri: urlFor(image).url() }}
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row items-center space-x-2 p-2">
          <TouchableOpacity>
            <AntDesign
              name="minuscircle"
              size={24}
              color={items.length > 0 ? "red" : "gray"}
            />
          </TouchableOpacity>
          <Text className="text-xl font-medium">{items.length}</Text>
          <TouchableOpacity>
            <AntDesign name="pluscircle" size={24} color="red" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DishCard;