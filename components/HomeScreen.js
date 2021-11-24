import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Decks from "./Decks";
import NewDeck from "./NewDeck";
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Decks" component={Decks} />
      <Tab.Screen name="Add Deck" component={NewDeck} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
