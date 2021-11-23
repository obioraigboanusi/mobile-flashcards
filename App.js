import * as React from "react";
import { View, Text, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import Decks from "./components/Decks";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" animated={true} backgroundColor={"#75654c"} />
      <Decks />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
