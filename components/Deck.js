import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
const Deck = ({ navigation, route, decks }) => {
  const deck = route.params.title;
  const questions = decks[deck].questions;
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 50 }}>
        <Text style={{ fontSize: 40, textAlign: "center" }}>{deck}</Text>
        {!!questions ? (
          <Text style={styles.extra}>
            {`${questions.length} ${questions.length > 1 ? "cards" : "card"}`}
          </Text>
        ) : (
          <Text style={styles.extra}>No cards added yet.</Text>
        )}
      </View>

      {!questions?.length > 0 && (
        <View>
          <Text style={{ marginTop: 15, marginBottom: 15, fontSize: 16 }}>
            You haven't added any card yet.
          </Text>
        </View>
      )}
      <View>
        <TouchableOpacity
          style={[styles.addBtn, styles.btn]}
          onPress={() => navigation.navigate("AddCard", { deck })}
        >
          <Text style={styles.addBtnText}>Add Card</Text>
        </TouchableOpacity>

        {questions?.length > 0 && (
          <TouchableOpacity
            style={[styles.startBtn, styles.btn]}
            onPress={() => navigation.navigate("Quiz", { deck })}
          >
            <Text style={styles.startBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 2,
  },
  startBtn: {
    backgroundColor: "blue",
    marginTop: 10,
    borderColor: "blue",
  },
  addBtn: {
    backgroundColor: "white",
    borderColor: "lightgray",
    borderStyle: "solid",
  },
  addBtnText: {
    color: "gray",
    fontSize: 16,
  },
  startBtnText: {
    color: "white",
    fontSize: 16,
  },
  extra: {
    color: "gray",
    marginTop: 3,
    fontSize: 24,
    textAlign: "center",
  },
});
function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(Deck);
