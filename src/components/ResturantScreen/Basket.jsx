import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectedBasketItems,
  selectedBasketTotal,
} from "../../context/slices/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Basket = () => {
  const navigation = useNavigation();
  const items = useSelector(selectedBasketItems);
  const total = useSelector(selectedBasketTotal);
  if (items.length === 0) return;
  return (
    <View className="absolute bottom-0 z-50  w-full  p-2">
      <TouchableOpacity
        onPress={() => navigation.navigate("BasketScreen")}
        className=" flex-row rounded-xl justify-between items-center w-full bg-[#ff2d2d] px-4 py-2"
      >
        <View className="flex-row space-x-2 items-center justify-center">
          <Text className="text-2xl font-bold">Open Basket</Text>
          <AntDesign name="arrowup" color={"white"} size={24} />
        </View>
        <View>
          <Text className="text-xl font-bold">Total</Text>
          <Text className="text-lg font-bold">₹ {total}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;
