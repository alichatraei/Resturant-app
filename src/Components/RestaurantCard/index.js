import React from "react";
import { FlatList, Text, View } from "react-native";

const RestaurantItems = ({ title, restaurants }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{`We found ${restaurants.length}`}</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item?.id}
        horizontal
        renderItem={({ item }) => <Text>{item?.name}</Text>}
      />
    </View>
  );
};

export default RestaurantItems;
