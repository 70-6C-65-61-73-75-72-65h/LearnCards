import React, { useState, useEffect } from "react";

import { subSpeciesRelation } from "../../../../utils/getTypeRelativeComponents";
import {
  LearnExtraFields,
  LearnFSCode,
  LearnFSPicture,
} from "../../ExtraFieldSets/Learn/Learn";

import {
  LearnShowExtraFields,
  LearnSFSCode,
  LearnSFSPicture,
} from "../../ExtraFieldSets/Learn/LearnShow";
import { CardRevealedConcealed } from "./CardItem";

import { useDispatch } from "react-redux";

import { checkCard } from "../../../../actions/cards";

import useStyles from "./styles";
import { CircularProgress } from "@material-ui/core";

const relativeComponents = [LearnFSCode, LearnFSPicture, LearnExtraFields];

const relativeComponentsShow = [
  LearnSFSCode,
  LearnSFSPicture,
  LearnShowExtraFields,
];

const getRelativeComponent = subSpeciesRelation(relativeComponents);
const getRelativeComponentShow = subSpeciesRelation(relativeComponentsShow);

const CardItem = ({ cardData, getNextCard, setStats }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false); // is card should be flipped
  const [answerProcessing, setAP] = useState(false); // is user answer in process
  const [userAnswer, setUA] = useState(null);

  const [isIncorrect, setII] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cardData.incorrect !== void 0) {
      // if (cardData.incorrect === false) {
      setII(cardData.incorrect);
      // } else if (cardData.incorrect === true) {
      // setII(true);
      // }
      setChecked(true);
      setAP(false);
      setStats((stats) => ({ ...stats, [cardData._id]: !cardData.incorrect }));
    }
  }, [cardData, setStats]);

  const check = () => {
    setAP(true);
    dispatch(checkCard(cardData._id, userAnswer));
  };

  if (answerProcessing) {
    return (
      <div
        style={{
          display: "flex",
          // alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <CircularProgress fontSize="large" />
      </div>
    );
  }

  // if checked  => add className to card used (isIncorrect)
  return (
    <div className={`${classes.card} ${checked ? classes.cardShow : ""}`}>
      {checked ? (
        <CardRevealedConcealed
          {...{
            learn: true,
            cardData,
            userAnswer,
            setUA,
            callMethod: getNextCard,
            flipped: checked,
            realtiveFieldSet: getRelativeComponentShow(cardData._type, {
              cardData,
              userAnswer,
              isIncorrect,
            }),
          }}
        />
      ) : (
        <CardRevealedConcealed
          {...{
            learn: true,
            cardData,
            userAnswer,
            callMethod: check,
            flipped: checked,
            realtiveFieldSet: getRelativeComponent(cardData._type, {
              cardData,
              setUA,
              userAnswer,
            }),
          }}
        />
      )}
    </div>
  );
};

export default CardItem;
