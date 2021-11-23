import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { initialData } from "../utils/data";
import DecksItem from "./DecksItem";
import Nodeck from "./Nodeck";
const Decks = () => {
  const deckLength = Object.keys(initialData).length;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Saved Decks</Text>
      </View>

      {deckLength > 0 ? (
        <FlatList
          data={Object.keys(initialData)}
          renderItem={({ item }) => <DecksItem item={item} />}
          contentContainerStyle={{ backgroundColor: "#eeeeee" }}
          keyExtractor={(item) => item}
        />
      ) : (
        <Nodeck />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },
});

export default Decks;
