import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import DecksItem from "./DecksItem";
import Nodeck from "./Nodeck";
import { getDecks } from "../utils/api";
import { initialData } from "../utils/data";

const Decks = ({ navigation, decks }) => {
  // const [decks, setdecks] = useState({});

  // useEffect(() => {
  //   getDecks().then((res) => setdecks(res));
  // }, []);

  const deckLength = Object.keys(decks).length;
  return (
    <View style={{ flex: 1 }}>
      {deckLength > 0 ? (
        <FlatList
          data={Object.keys(decks)}
          renderItem={({ item }) => (
            <DecksItem title={item} navigation={navigation} />
          )}
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
function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(Decks);
