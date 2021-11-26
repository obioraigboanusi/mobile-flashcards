import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { handleAddNewDeck } from "../actions";

const NewDeck = ({ navigation, dispatch, decks }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = () => {
    if (value) {
      if (
        Object.keys(decks).some(
          (item) => item.toLowerCase().trim() === value.toLowerCase().trim()
        )
      ) {
        alert("This deck aleady exist.");
      } else {
        dispatch(handleAddNewDeck(value)).then((res) => {
          setValue("");
          setError("");
          navigation.navigate("Decks");
        });
      }
    } else {
      setError("Enter a title for your deck");
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
        {!!error && !value && (
          <View>
            <Text style={{ color: "red", fontSize: 16 }}>{error}</Text>
          </View>
        )}
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
export default connect((decks) => ({ decks }))(NewDeck);
