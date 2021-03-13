import {
  FETCH_ALL,
  FETCH_SINGLE_CARD,
  CREATE,
  CARD_ANSWER_CORRECT,
  CARD_ANSWER_INCORRECT,
  DELETE,
  UPDATE,
} from "../constants/actionTypes";
import * as api from "../api/index.js";
import { handleError } from "../utils/handleAPIErrors";

export const createCard = (cardData, router) => async (dispatch) => {
  try {
    const { data } =
      cardData._type === "picture"
        ? await api.createCardPicture(cardData)
        : await api.createCard(cardData);

    dispatch({ type: CREATE, payload: data.card });

    router.push("/");
  } catch (error) {
    handleError(error);
  }
};

export const fetchCards = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTodayCards();
    console.log(data.cards);
    dispatch({ type: FETCH_ALL, payload: data.cards });
  } catch (error) {
    handleError(error);
  }
};

export const fetchSingleCard = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleCard(id);
    dispatch({ type: FETCH_SINGLE_CARD, payload: data.card });
  } catch (error) {
    handleError(error);
  }
};

// if card incorrect -> dont delete from card stack for today -> ask it card again after all cards session
// TODO add repeat action -> to ask already asked cards
// TODO add search and get any card
export const checkCard = (id, answer, router) => async (dispatch) => {
  try {
    const { data } = await api.checkCard(id, answer);
    //  updatedCard, isAnswerCorrect; in data
    if (data.isAnswerCorrect) {
      dispatch({ type: CARD_ANSWER_CORRECT, payload: data.updatedCard._id });
    } else {
      // TODO check in front ui component if card.incorrect => change Paper style
      data.updatedCard.incorrect = true;
      dispatch({ type: CARD_ANSWER_INCORRECT, payload: data.updatedCard });
    }

    router.push("/");
  } catch (error) {
    handleError(error);
  }
};
export const updateCard = (id, patchedCard, router) => async (dispatch) => {
  try {
    const { data } = await api.updateCard(id, patchedCard);

    dispatch({ type: UPDATE, payload: data });

    router.push("/");
  } catch (error) {
    handleError(error);
  }
};

export const deleteCard = (id) => async (dispatch) => {
  try {
    await api.deleteCard(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    handleError(error);
  }
};

// ::-webkit-scrollbar,
// ::-webkit-scrollbar-button,
// ::-webkit-scrollbar-track,
// ::-webkit-scrollbar-track-piece,
// ::-webkit-scrollbar-thumb,
// ::-webkit-scrollbar-corner,
// ::-webkit-resizer
// https://css-tricks.com/custom-scrollbars-in-webkit/
