import {
  FETCH_ALL,
  FETCH_SINGLE_CARD,
  CREATE,
  DELETE,
  UPDATE,
  CARD_ANSWER_INCORRECT, //  set currentCardAnswerCorrect (if incorrect)
  // CARD_ANSWER_CORRECT, // delete card from local card list (if correct)
} from "../constants/actionTypes";

const initialState = {
  cards: [],
  // currentAnswerCorrect
  // if error => will be settled to false and it will change ui depends on it
  // currentCardAnswerCorrect: true
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      // retrieve
      return { ...state, cards: [...action.payload] };
    case CREATE:
    case FETCH_SINGLE_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case CARD_ANSWER_INCORRECT:
    case UPDATE:
      // update
      return {
        ...state,
        cards: state.cards.map((card) =>
          card._id === action.payload._id ? action.payload : card
        ),
      };
    // case CARD_ANSWER_CORRECT:
    case DELETE:
      // delete
      return {
        ...state,
        cards: state.cards.filter((card) => card._id !== action.payload),
      };
    default:
      return { ...state };
  }
};
export default cardReducer;
