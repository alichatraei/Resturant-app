import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const SearchBar = ({ searchHandler, submitHandler }) => {
  return (
    <View style={styles.viewStyles}>
      <AntDesign
        style={styles.searchIconStyle}
        name="search1"
        size={24}
        color="black"
      />
      <TextInput
        placeholder="Search"
        style={styles.textInputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        selectionColor={"black"}
        onChangeText={searchHandler}
        onEndEditing={submitHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    backgroundColor: "#ccc",
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  searchIconStyle: {
    paddingVertical: 10,
  },
  textInputStyle: {
    flex: 10,
    marginLeft: 10,
    fontSize: 18,
  },
});

export default SearchBar;
