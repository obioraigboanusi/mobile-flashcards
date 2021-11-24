import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { initialData } from "../utils/data";

const Quiz = ({ navigation, route }) => {
  const [flipped, setFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentDeck = route.params.deck;
  const { questions } = initialData[currentDeck];
  const questionsLenght = questions.length;
  
  const markCorrect = () => {};
  const markIncorrect = () => {};
  return (
    <ScrollView style={styles.container}>
      <ProgressBar
        currentIndex={currentIndex}
        questionsLenght={questionsLenght}
      />
      {flipped ? (
        <Answer
          answer={questions[currentIndex].answer}
          question={questions[currentIndex].question}
        />
      ) : (
        <Question question={questions[currentIndex].question} />
      )}
      <View>
        {flipped ? (
          <TouchableOpacity onPress={() => setFlipped(false)}>
            <Text style={styles.flipToggleText}>Question</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setFlipped(true)}>
            <Text style={styles.flipToggleText}>Answer</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ marginTop: 50 }}>
        <TouchableOpacity
          onPress={markCorrect}
          style={[styles.btn, styles.correct]}
        >
          <Text style={styles.btnText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={markIncorrect}
          style={[styles.btn, styles.incorrect]}
        >
          <Text style={styles.btnText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

function Question({ question }) {
  return (
    <View style={styles.question}>
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
}
function Answer({ answer, question }) {
  return (
    <View style={styles.question}>
      <Text style={{ textAlign: "center", fontSize: 16, color: "grey" }}>
        {question}
      </Text>
      <Text style={styles.questionText}>{answer}</Text>
    </View>
  );
}
function ProgressBar({ questionsLenght, currentIndex }) {
  return (
    <View>
      <Text style={styles.progress}>
        {`${currentIndex + 1} / ${questionsLenght}`}{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  progress: {
    fontSize: 20,
    color: "gray",
  },
  question: {
    marginTop: 30,
    padding: 20,
    marginBottom: 10,
  },
  questionText: { fontSize: 32, textAlign: "center" },
  flipToggleText: {
    fontSize: 24,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    padding: 16,
    marginTop: 20,
    borderRadius: 6,
    width: "50%",
    maxWidth: "200",
    alignSelf: "center",
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  incorrect: {
    backgroundColor: "red",
  },
  correct: {
    backgroundColor: "green",
  },
});

export default Quiz;
