import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { handleAddDeckCard } from "../actions";

function NewCard({ dispatch, route, decks }) {
  console.log(route);
  const title = route.params.deck;
  const deck = decks[title];
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  const addCard = () => {
    if (question && answer) {
      if (
        deck.questions.some(
          (item) =>
            item.question.toLowerCase().trim() === question.toLowerCase().trim()
        )
      ) {
        alert("This question already exist");
      } else {
        dispatch(handleAddDeckCard({ title, question, answer })).then(() => {
          setAnswer("");
          setQuestion("");
          setError(false);
        });
      }
    } else {
      setError(true);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.inner}>
        <View>
          <Text style={styles.labelText}>Question</Text>
          <TextInput
            value={question}
            style={styles.input}
            placeholder="Question"
            onChangeText={(value) => setQuestion(value)}
          />
          {error && question === "" && (
            <Text style={{ color: "red", fontSize: 16 }}>
              Question is requied
            </Text>
          )}
        </View>
        <View>
          <Text style={styles.labelText}>Answer</Text>
          <TextInput
            value={answer}
            style={styles.input}
            placeholder="Answer"
            onChangeText={(value) => setAnswer(value)}
          />
          {error && answer === "" && (
            <Text style={{ color: "red", fontSize: 16 }}>
              Answer is requied
            </Text>
          )}
        </View>
        <View style={styles.submitCont}>
          <TouchableOpacity onPress={addCard} style={styles.submitBtn}>
            <MaterialCommunityIcons name="plus" size={24} color="white" />
            <Text style={styles.submitText}> Create Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    padding: 24,
  },
  labelText: {
    fontSize: 18,
    textAlign: "left",
  },
  submitText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  submitCont: {
    marginTop: 12,
  },
  submitBtn: {
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
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

export default connect((decks) => ({ decks }))(NewCard);
