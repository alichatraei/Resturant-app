import React, { useEffect, useReducer, useState } from "react";
import { Text, View } from "react-native";
import yelp from "../../Api/yelp";
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
  const [result, setResult] = useState([]);
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
  const searchApi = async () => {
    const resultAPI = await yelp.get("/recipes/complexSearch", {
      params: {
        apiKey: "8c2077e5f0f9419ea48c115ce920e0f9",
      },
    });
    setResult(resultAPI.data?.results);
  };
  useEffect(() => {
    searchApi();
  }, []);
  return (
    <View>
      <SearchBar
        searchHandler={searchHandler}
        submitHandler={searchOnEndEditingHandler}
      />
      <Text> Searched text is : {state.searchText}</Text>
      <Text> Submitted search text is : {state.submitSearchText}</Text>
      <Text> Amount : {result.length}</Text>
    </View>
  );
};

export default ResturantContainer;
