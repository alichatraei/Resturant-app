import React from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import RestaurantCardItem from "../RestaurantCardItem";

const RestaurantItems = ({ title, restaurants, navigation }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={styles.levelTitleStyles}>{title}</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item?.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                id: item?.id,
              })
            }
          >
            <RestaurantCardItem
              title={item?.name}
              imageURL={item?.image_url}
              reviews={item?.review_count}
              stars={item?.rating}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  levelTitleStyles: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default RestaurantItems;
