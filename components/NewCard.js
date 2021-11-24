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

function NewCard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const addCard = () => {
    if (question && answer) {
      alert("Card added");
      setAnswer("");
      setQuestion("");
    } else {
      alert("Please fill all fields");
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
        </View>
        <View>
          <Text style={styles.labelText}>Answer</Text>
          <TextInput
            value={answer}
            style={styles.input}
            placeholder="Answer"
            onChangeText={(value) => setAnswer(value)}
          />
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

export default NewCard;
