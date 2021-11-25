import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const Result = ({ navigation, route, decks }) => {
  const title = route.params.deck;
  const deck = decks[title];
  const correct = deck.questions.filter(
    (item) => !!item?.answerStatus === true
  ).length;
  const attempted = deck.questions.filter((item) => !!item?.isAnswered).length;
  const total = deck.questions.length;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.congrats}>Congrats for completing this Quiz.</Text>
        <View>
          <View style={styles.table}>
            <Text style={styles.tableTxt}>Attempted Qs</Text>
            <Text style={styles.tableTxt}>{attempted}</Text>
          </View>

          <View style={styles.table}>
            <Text style={styles.tableTxt}>Correct Qs:</Text>
            <Text style={styles.tableTxt}>{correct}</Text>
          </View>
          <View style={styles.table}>
            <Text style={styles.tableTxt}>Total Qs:</Text>
            <Text style={styles.tableTxt}>{total}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 30, justifyContent: "center" }}>
        <Text style={{ fontSize: 18 }}>
          Study harder to perform better next time
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.btn]}
          onPress={() => navigation.navigate("Decks")}
        >
          <Text style={styles.btnText}>Back To Decks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  congrats: {
    fontSize: 28,
    textAlign: "center",
    color: "blue",
    marginBottom: 30,
  },
  content: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 10,
  },
  btn: {
    padding: 16,
    marginTop: 40,
    borderRadius: 6,
    width: "50%",
    alignSelf: "center",
    backgroundColor: "blue",
    borderColor: "blue",
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  table: {
    flexDirection: "row",
    marginBottom: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  tableTxt: {
    fontSize: 18,
    flex: 1,
  },
});

function mapStatetoProps(decks) {
  return {
    decks,
  };
}
export default connect(mapStatetoProps)(Result);
