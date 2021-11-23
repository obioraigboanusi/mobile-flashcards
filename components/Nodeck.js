import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Nodeck = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 16 }}>
        No deck found!
      </Text>
      <Text style={{ fontSize: 16 }}>Create new desks to see them here...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Nodeck;
