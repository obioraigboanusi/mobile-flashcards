import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD,
  DELETE_DECK,
  ANSWER_QUESTION,
} from "../actions/index";
import { formatAnsweredQuestion, formatDeck } from "../utils/helpers";

const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        [action.title]: formatDeck(action.title),
      };
    case ADD_CARD:
      const { payload } = action;
      return {
        ...state,
        [payload.title]: {
          ...state[payload.title],
          questions: state[payload.title].questions.concat([action.payload]),
        },
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.payload.title]: {
          ...state[action.payload.title],
          questions: state[action.payload.title].questions.map((item) => {
            if (action.payload.question === item.question) {
              return formatAnsweredQuestion(action.payload);
            } else {
              return item;
            }
          }),
        },
      };

    default:
      return state;
  }
};

export default decks;
