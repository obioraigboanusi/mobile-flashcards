import AsyncStorage from "@react-native-async-storage/async-storage";
import { initialData } from "./data";
import {
  formatAnsweredQuestion,
  formatDeck,
  setDummyData,
  UDACIFLASHCARDS,
} from "./helpers";

export function getDecks() {
  return AsyncStorage.getItem(UDACIFLASHCARDS)
    .then((res) => {
      return JSON.parse(res);
    })
    .catch((err) => console.error(err));
}

export async function saveDeckTitle(title) {
  try {
    const newDeck = JSON.stringify({
      [title]: formatDeck(title),
    });
    const res = await AsyncStorage.mergeItem(UDACIFLASHCARDS, newDeck);
    if (res !== null) {
      const data = await getDecks();
      return data[title];
    }
  } catch (error) {
    console.warn("ERROR:", error.message);
  }
}

export async function addCardToDeck({ title, question, answer }) {
  try {
    const data = await getDecks();
    if (data) {
      data[title].questions.push({ question, answer });
      return AsyncStorage.setItem(UDACIFLASHCARDS, JSON.stringify(data));
    }
  } catch (error) {
    console.warn("ERROR:", error);
  }
}
export async function saveAnswer(payload) {
  try {
    const data = await getDecks();
    if (data) {
      data[payload.title].questions.map((item) => {
        if (payload.question === item.question) {
          return formatAnsweredQuestion(payload);
        } else {
          return item;
        }
      });
      return AsyncStorage.setItem(UDACIFLASHCARDS, JSON.stringify(data));
    }
  } catch (error) {
    console.warn("ERROR:", error);
  }
}
