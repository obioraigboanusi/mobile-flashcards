import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Decks from "./Decks";
import NewDeck from "./NewDeck";
import { connect } from "react-redux";
import { handleRecieveDecks } from "../actions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const HomeScreen = ({ dispatch }) => {
  useEffect(() => {
    dispatch(handleRecieveDecks());
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Decks"
        component={Decks}
        options={{
          tabBarLabel: "Decks",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cards" color="blue" size={16} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Deck"
        component={NewDeck}
        headerStyle={{ color: "red" }}
        options={{
          tabBarLabel: "ADD Deck",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="card-plus"
              color="blue"
              size={16}
              // style={{  }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default connect()(HomeScreen);
