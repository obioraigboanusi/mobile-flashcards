import * as React from "react";
import { View, Text, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import Decks from "./components/Decks";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Deck from "./components/Deck";
import HomeScreen from "./components/HomeScreen";
import NewCard from "./components/NewCard";
import Quiz from "./components/Quiz";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Decks"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Deck"
          component={Deck}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen
          name="AddCard"
          component={NewCard}
          options={{ title: "Add Card" }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ title: "Quiz" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
