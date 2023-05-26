import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCards = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} className="relative w-24 h-24 ">
      <Image source={{ uri: imgUrl }} className="w-full h-full rounded-xl " />
      <Text
        className="absolute bg-[#00000092] text-center 
            bottom-0 py-2 text-white text-[17] font-bold w-full"
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCards;
