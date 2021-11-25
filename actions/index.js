import {
  getDecks,
  saveDeckTitle,
  addCardToDeck,
  saveAnswer,
} from "../utils/api";
import { setDummyData } from "../utils/helpers";

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
};

export const addDeck = (title) => {
  return {
    type: ADD_DECK,
    title,
  };
};
export const addDeckCard = (payload) => {
  return {
    type: ADD_CARD,
    payload,
  };
};
export const answerQuestion = (payload) => {
  return {
    type: ANSWER_QUESTION,
    payload,
  };
};

export const handleAnswerQuestion = (payload) => (dispatch) => {
  return saveAnswer(payload)
    .then((res) => {
      dispatch(answerQuestion(payload));
    })
    .catch((err) => console.warn("ERROR", err));
};
export const handleAddNewDeck = (title) => (dispatch) => {
  return saveDeckTitle(title)
    .then((data) => {
      // console.log("data", data);
      dispatch(addDeck(title));
    })
    .catch((err) => console.warn("ERROR", err));
};
export const handleRecieveDecks = () => {
  return (dispatch) => {
    return getDecks()
      .then((data) => {
        if (data === null) {
          return dispatch(receiveDecks(setDummyData()));
        }
        return dispatch(receiveDecks(data));
      })
      .catch((error) => {
        console.warn("ERROR:", err);
      });
  };
};

export const handleAddDeckCard = (payload) => {
  return (dispatch) => {
    return addCardToDeck(payload)
      .then(() => {
        return dispatch(addDeckCard(payload));
      })
      .catch((err) => {
        console.warn("add card error", err);
      });
  };
};
