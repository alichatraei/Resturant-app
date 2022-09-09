import React, { useReducer } from "react";
import { Text, View } from "react-native";
import SearchBar from "../../Components/SearchBar";
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
  const [state, dispatch] = useReducer(reducer, {
    searchText: "",
    submitSearchText: "",
  });
  const searchHandler = (text) => {
    dispatch({ type: "change_search_text", payload: text });
  };
  const searchOnEndEditingHandler = () => {
    dispatch({ type: "submit_search_text", payload: "Submitted!" });
  };
  return (
    <View>
      <SearchBar
        searchHandler={searchHandler}
        submitHandler={searchOnEndEditingHandler}
      />
      <Text> Searched text is : {state.searchText}</Text>
      <Text> Submitted search text is : {state.submitSearchText}</Text>
    </View>
  );
};

export default ResturantContainer;
