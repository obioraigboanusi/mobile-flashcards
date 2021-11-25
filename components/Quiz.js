import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions";

const Quiz = ({ navigation, route, decks, dispatch }) => {
  const [flipped, setFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [answered, setAnswered] = useState(false);

  const currentDeck = route.params.deck;
  const { questions } = decks[currentDeck];
  const questionsLenght = questions.length;
  const currentQuestion = questions[currentIndex];

  const playNext = () => {
    if (currentIndex !== questionsLenght - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };
  const playPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  const answerQuestion = (status) => {
    const { question, answer } = currentQuestion;
    dispatch(
      handleAnswerQuestion({
        title: currentDeck,
        question,
        answer,
        answerStatus: status,
      })
    ).then(() => console.log("SUCCESS"));
  };
  const markCorrect = () => {
    answerQuestion(true);
  };
  const markIncorrect = () => {
    answerQuestion(false);
  };
  return (
    <View style={styles.container}>
      <ProgressBar
        currentIndex={currentIndex}
        questionsLenght={questionsLenght}
        currentQuestion={currentQuestion}
      />
      {!!flipped ? (
        <Answer
          answer={currentQuestion.answer}
          question={currentQuestion.question}
        />
      ) : (
        <Question question={currentQuestion.question} />
      )}
      <View>
        {!!flipped ? (
          <TouchableOpacity onPress={() => setFlipped(false)}>
            <Text style={styles.flipToggleText}>Question</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setFlipped(true)}>
            <Text style={styles.flipToggleText}>Answer</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* {!!currentQuestion?.answerStatus && (
        <View>
          <Text style={{ textAlign: "left", fontSize: 16, fontWeight: "600" }}>
            Answered: {currentQuestion.answerStatus ? "Correct" : "Incorrect"}
          </Text>
        </View>
      )} */}

      {currentQuestion?.isAnswered ? (
        currentIndex !== questionsLenght - 1 ? (
          <View style={styles.prevNext}>
            <TouchableOpacity style={styles.moves} onPress={playPrev}>
              <Text style={styles.movesBtn}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={playNext} style={styles.moves}>
              <Text style={styles.movesBtn}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Result", { deck: currentDeck })
              }
              style={[styles.btn, styles.incorrect]}
            >
              <Text style={styles.btnText}>Check Result</Text>
            </TouchableOpacity>
          </View>
        )
      ) : (
        <View style={{ marginTop: 50, marginBottom: 20 }}>
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
      )}

      {/* (
       
      ) */}
    </View>
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
function ProgressBar({ questionsLenght, currentIndex, currentQuestion }) {
  return (
    <View
      style={{
        paddingTop: 10,
        paddingLeft: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={styles.progress}>
        {`${currentIndex + 1} / ${questionsLenght}`}
      </Text>
      <Text style={{ color: "green", fontWeight: "600" }}>
        {!!currentQuestion?.isAnswered ? "Answered" : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  progress: {
    fontSize: 16,
    color: "gray",
  },
  question: {
    marginTop: 30,
    padding: 5,
    marginBottom: 10,
  },
  questionText: { fontSize: 18, textAlign: "center" },
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
  moves: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderRightColor: "gray",
  },
  movesBtn: {
    color: "gray",
    fontSize: 16,
  },
  prevNext: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 10,
  },
});
function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(Quiz);
