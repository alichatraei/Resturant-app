import React, { useEffect, useReducer } from "react";
import { Text, View, ScrollView } from "react-native";
import RestaurantItems from "../../Components/RestaurantCard";
import SearchBar from "../../Components/SearchBar";
import useSearchRestaurant from "../../hooks/useSearchRestaurant";
const reducer = (state, action) => {
  switch (action.type) {
    case "change_search_text":
      return { ...state, searchText: action.payload };
    case "submit_search_text":
      return { ...state, submitSearchText: action.payload };
    default:
      return state;
  }
};
const ResturantContainer = ({ navigation }) => {
  const [result, searchApi] = useSearchRestaurant();
  const [state, dispatch] = useReducer(reducer, {
    searchText: "",
    submitSearchText: "",
  });
  const searchHandler = (text) => {
    dispatch({ type: "change_search_text", payload: text });
  };
  const searchOnEndEditingHandler = () => {
    searchApi(state.searchText);
  };
  const filterRestaurantsByPrice = (price) => {
    return result.filter((item) => item?.price === price);
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        searchHandler={searchHandler}
        submitHandler={searchOnEndEditingHandler}
      />
      {!result ? null : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <RestaurantItems
            title={"Inexpensive  Restaurants"}
            restaurants={filterRestaurantsByPrice("$")}
            navigation={navigation}
          />
          <RestaurantItems
            title={"Moderately price "}
            restaurants={filterRestaurantsByPrice("$$")}
            navigation={navigation}
          />
          <RestaurantItems
            title={"Expensive price"}
            restaurants={filterRestaurantsByPrice("$$$")}
            navigation={navigation}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default ResturantContainer;
