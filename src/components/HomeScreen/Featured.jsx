import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import client from "../../constants/sanity";
import { AntDesign } from "@expo/vector-icons";
import ResturantCard from "./ResturantCard";

const Featured = ({ name, description, id }) => {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
            *[_type=='featured' && _id==$id ]{
              ...,
              resturant[]->{
                ...,
                dishes[]->,
                type->{
                  name
                }
              }
            }[0]`,
        { id }
      )
      .then((data) => setResturants(data?.resturant));
  }, [id]);
  return (
    <View>
      <View className="mt-4  flex-row justify-between px-6 py-3 ">
        <View>
          <Text className="text-xl font-bold">{name}</Text>
          <Text className="text-sm text-gray-500">hi{description}</Text>
        </View>
        <AntDesign name="arrowright" size={24} color="#E33342" />
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {resturants.map((resturant) => (
          <ResturantCard key={resturant._id} resturant={resturant} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured;
