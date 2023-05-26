import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import client, { urlFor } from "../../constants/sanity";
import CategoryCards from "./CategoryCards";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
            *[_type=="category"]
        `
      )
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <CategoryCards
          imgUrl={urlFor(item.image).width(200).url()}
          title={item.name}
        />
      )}
      keyExtractor={(item) => item._id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10, gap: 10 }}
    />
  );
};

export default Categories;
