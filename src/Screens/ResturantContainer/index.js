import React, { useEffect, useReducer } from "react";
import { Text, View } from "react-native";
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
const ResturantContainer = () => {
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
    <View>
      <SearchBar
        searchHandler={searchHandler}
        submitHandler={searchOnEndEditingHandler}
      />
      <Text> Searched text is : {state.searchText}</Text>
      <Text> Submitted search text is : {state.submitSearchText}</Text>
      <Text> Amount : {result.length}</Text>
      <RestaurantItems
        title={"Inexpensive  Restaurants"}
        restaurants={filterRestaurantsByPrice("$")}
      />
      <RestaurantItems
        title={"Moderately price "}
        restaurants={filterRestaurantsByPrice("$$")}
      />
      <RestaurantItems
        title={"Expensive price"}
        restaurants={filterRestaurantsByPrice("$$$")}
      />
    </View>
  );
};

export default ResturantContainer;
