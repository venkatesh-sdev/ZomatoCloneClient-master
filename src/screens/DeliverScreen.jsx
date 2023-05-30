import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";

const DeliverScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-[#E33342] flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-row justify-between items-center px-4 py-5">
          <TouchableOpacity onPress={() => navigation.navigate("BasketScreen")}>
            <AntDesign name="close" color="white" size={24} />
          </TouchableOpacity>
          <Text className="text-xl  text-white">Order Help</Text>
        </View>
        <View className="bg-white p-6 rounded-md shadow-md mx-5 overflow-hidden">
          <View className=" flex-row justify-between items-center  ">
            <View className="">
              <Text className="text-gray-500 text-xl">Estimated Arival</Text>
              <Text className="font-bold text-4xl">30 - 35 mins</Text>
            </View>
            <Image
              source={require("../../assets/deliveryLogo.jpg")}
              className="w-32 h-32 rounded-lg"
            />
          </View>
          <Progress.Bar indeterminate={true} color="#E33345" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliverScreen;
