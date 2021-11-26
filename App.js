import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Deck from "./components/Deck";
import HomeScreen from "./components/HomeScreen";
import NewCard from "./components/NewCard";
import Quiz from "./components/Quiz";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import middelewares from "./middlewares";
import Result from "./components/Result";
import { setLocalNotifications } from "./utils/helpers";

function App() {
  const Stack = createNativeStackNavigator();
  const store = createStore(reducers, middelewares);
  useEffect(() => {
    setLocalNotifications();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
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
            // options={({ route }) => ({ title: route.params.title })}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{ title: "Quiz" }}
          />
          <Stack.Screen
            name="Result"
            component={Result}
            options={{ title: "Quiz Result" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
