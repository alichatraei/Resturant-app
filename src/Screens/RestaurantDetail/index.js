import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import useSearchRestaurant from "../../hooks/useSearchRestaurant";

const RestaurantDetail = ({ route }) => {
  const [result, searchApi, searchRestaurantApi, eachRestaurant] =
    useSearchRestaurant();
  const {
    params: { id },
  } = route;
  useEffect(() => {
    searchRestaurantApi(id);
  }, [id]);

  return !eachRestaurant ? (
    <View style={styles.container}>
      <Text>Something went wrong!!!</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.restaurantTitleStyles}>
        Test {eachRestaurant?.name}
      </Text>
      <FlatList
        data={eachRestaurant?.photos || []}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image style={styles.imageStyles} source={{ uri: item }} />
        )}
      />
      <Text style={styles.detailsStyles}>Stars: {eachRestaurant?.rating}</Text>
      <Text style={styles.detailsStyles}>
        Transactions: {eachRestaurant?.transactions.join(" - ")}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  restaurantTitleStyles: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imageStyles: {
    width: 350,
    height: 150,
    borderRadius: 8,
    marginHorizontal: 8,
    borderWidth: 10,
  },
  detailsStyles: {
    color: "#ccc",
    fontSize: 14,
  },
});
export default RestaurantDetail;
