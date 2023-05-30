import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectResturant } from "../context/slices/resturantSlice";
import {
  selectedBasketTotal,
  selectedBasketItems,
} from "../context/slices/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import BasketItem from "../components/BasketScreen/BasketItem";
import { AntDesign, Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
const BasketScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const items = useSelector(selectedBasketItems);
  const total = useSelector(selectedBasketTotal);
  const dispatch = useDispatch();
  const [groupedItems, setGroupedItems] = useState([]);
  const [showPrice, setShowPrice] = useState(true);

  useEffect(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItems(groupItems);
  }, [items]);

  return (
    <Animatable.View animation="slideInUp" className="flex-1">
      <SafeAreaView className="h-[100%] pb-5">
        <View className="w-full h-20 border-b-2 border-red-700 justify-center items-center relative">
          <Text className="text-3xl font-bold">Basket</Text>
          <Text className=" text-gray-500 text-md">
            Order from {resturant.name}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute right-2 top-2"
          >
            <AntDesign name="closecircle" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <View className="mt-5 bg-gray-200 flex-row items-center px-4 justify-between py-1">
          <View className="flex-row items-center space-x-2">
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
              }}
              className="h-11 w-11 bg-gray-300 p-4 rounded-full"
            />
            <Text>Deliver in 30 - 35 Minutes</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-red-700 text-md">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="">
          {Object.entries(groupedItems).map(([key, items]) => (
            <BasketItem key={key} items={items} />
          ))}
        </ScrollView>
        {showPrice ? (
          <TouchableOpacity
            onPress={() => setShowPrice(false)}
            className="flex-row mx-4 space-x-4 px-4 justify-center items-center rounded-lg py-2 bg-red-600 "
          >
            <Text className="text-white text-xl  font-bold">Check Prices</Text>
            <Feather name="arrow-right" color={"white"} size={24} />
          </TouchableOpacity>
        ) : (
          <View className="relative">
            <View className="justify-self-end p-2 flex-row items-center justify-between">
              <Text className="text-gray-500 text-md">Subtotal:</Text>
              <Text className="font-bold text-md">₹ {total}</Text>
            </View>
            <View className="justify-self-end p-2 flex-row items-center justify-between">
              <Text className="text-gray-500 text-md">Delivery fee:</Text>
              <Text className="font-bold text-md">₹ 40</Text>
            </View>
            <View className="justify-self-end p-2 flex-row items-center justify-between">
              <Text className="text-gray-500 text-md">Order Total:</Text>
              <Text className="font-bold text-md">₹ {total + 80}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("PreparingOrderScreen")}
              className="justify-center items-center px-4 py-2 mx-2 rounded-lg bg-red-600"
            >
              <Text className="text-3xl font-bold text-white">Place Order</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </Animatable.View>
  );
};

export default BasketScreen;
