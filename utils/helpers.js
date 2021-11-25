import AsyncStorage from "@react-native-async-storage/async-storage";
import { initialData } from "./data";

export const UDACIFLASHCARDS = "UdaciFlachcards:cards";

export const formatDeck = (title) => ({
  title: title,
  questions: [],
});
export const formatAnsweredQuestion = ({ question, answer, answerStatus }) => ({
  question,
  answer,
  answerStatus,
  isAnswered: true,
});

export const setDummyData = () => {
  return AsyncStorage.getItem(UDACIFLASHCARDS).then((res) => {
    if (!res) {
      return AsyncStorage.setItem(UDACIFLASHCARDS, JSON.stringify(initialData))
        .then((res) => {
          //   console.log("Set dummy", res);
          return initialData;
        })
        .catch((err) => console.log(err));
    }
  });
};
