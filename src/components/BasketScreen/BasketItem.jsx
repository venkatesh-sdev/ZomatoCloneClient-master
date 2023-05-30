import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../../constants/sanity";
import { useDispatch } from "react-redux";
import { removeItems } from "../../context/slices/basketSlice";

const BasketItem = ({ items }) => {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  return (
    <View className="bg-red-200 flex-1 p-2 m-2 rounded-xl  px-4">
      <View className=" flex-row flex-1 my-3 justify-between ">
        <TouchableOpacity
          onPress={() => setIsShow((prev) => !prev)}
          className="flex-row flex-[0.8] justify-between items-center"
        >
          <View className="flex-row items-center space-x-2">
            <Text className="text-red-600 font-medium text-lg">
              {items.length} x
            </Text>
            <Image
              className="w-12 h-12 rounded-xl"
              source={{ uri: urlFor(items[0].image).url() }}
              resizeMode="contain"
            />
          </View>

          <Text className="text-lg font-bold">
            Price: ₹ {items[0].price * items.length}
          </Text>

        </TouchableOpacity>
        
        <TouchableOpacity
          className="rounded-lg px-2 py-3"
          onPress={() => {
            if (!items.length < 0) return;
            dispatch(removeItems({ id: items[0].id }));
          }}
        >
          <Text className="text-lg text-red-800">remove</Text>
        </TouchableOpacity>
      </View>
      {isShow && (
        <View className="flex-1">
          <Text className="text-lg font-semibold">
            Dish Name:{" "}
            <Text className="text-md font-normal">{items[0].name}</Text>
          </Text>
          <Text className="text-lg font-semibold">
            Description:{" "}
            <Text className="text-md font-normal">{items[0].description}</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

export default BasketItem;
