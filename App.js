import * as React from "react";
import { View, Text, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import Decks from "./components/Decks";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Deck from "./components/Deck";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Decks"
            component={Decks}
            options={{ title: "Saved Decks" }}
          />
          <Stack.Screen
            name="Deck"
            component={Deck}
            options={({ route }) => ({ title: route.params.title })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
// });
