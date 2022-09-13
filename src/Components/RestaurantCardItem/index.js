import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const RestaurantCardItem = ({ imageURL, title, stars, reviews }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyles} defaultSource={{ uri: imageURL }} />
      <Text style={styles.titleStyles}>{title}</Text>
      <Text
        style={styles.detailsStyles}
      >{`${stars} Stars, ${reviews} Reviews`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  imageStyles: {
    width: 250,
    height: 150,
    borderRadius: 8,
  },
  titleStyles: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  detailsStyles: {
    color: "#ccc",
  },
});
export default RestaurantCardItem;
