import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const NewDeck = () => {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (value) {
      alert("Created");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 32, textAlign: "center" }}>
          What is the title of your new decK?
        </Text>
      </View>
      <View>
        <TextInput
          value={value}
          style={styles.input}
          placeholder="Enter deck title"
          onChangeText={(value) => setValue(value)}
        />
      </View>
      <View style={styles.submitCont}>
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  submitText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  submitCont: {
    marginTop: 12,
  },
  submitBtn: {
    backgroundColor: "blue",
    padding: 16,
    marginTop: 20,
    borderRadius: 6,
    width: "50%",
    maxWidth: "200",
    alignSelf: "center",
  },
  input: {
    borderWidth: 2,
    borderRadius: 6,
    fontSize: 16,
    borderStyle: "solid",
    padding: 16,
    width: "100%",
    alignSelf: "center",
    margin: 10,
  },
});
export default NewDeck;
