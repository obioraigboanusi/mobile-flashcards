import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { initialData } from "../utils/data";

function DecksItem({ navigation, item }) {
  const { title, questions } = initialData[item];

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Deck", { title })}
    >
      <Text style={{ fontSize: 24 }}>{title}</Text>
      {!!questions ? (
        <Text style={styles.extra}>
          {`${questions.length} ${
            questions.length > 1 ? "cards" : "card"
          }`}
        </Text>
      ) : (
        <Text style={styles.extra}>No cards added yet.</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 35,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  extra: { color: "gray", marginTop: 12, fontStyle: "italic" },
});

export default DecksItem;
