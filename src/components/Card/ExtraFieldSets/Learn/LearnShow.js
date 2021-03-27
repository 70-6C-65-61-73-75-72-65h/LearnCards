import { Typography } from "@material-ui/core";
import {
  ListShowExtraFields,
  ListSFSCode,
  ListSFSPicture,
} from "../List/ListShow";

import { makeStyles } from "@material-ui/core/styles";
import { AnswerReadField } from "../../CardFields/Common/read";
import { CQAReadField } from "../../CardFields/Code/read";

const cls = (isIncorrect) =>
  makeStyles((theme) => ({
    // for theory create update
    root: {
      display: "flex",
      alignSelf: "center",
      borderColor: isIncorrect ? "red" : "white",
      color: isIncorrect ? "red" : "white",
      // border: `1px solid ${isIncorrect ? "red" : "white"}`,
      borderBottomStyle: "solid",
      // transform: "skewX(-20deg)",
      borderWidth: "2px",
      fontSize: "20px",
      fontWeight: "700",

      "&::after": {
        display: "block",
        position: "relative",
        content: isIncorrect ? "'\\2716'" : "'\\2714'", //"'\\2193'",
        color: isIncorrect
          ? theme.palette.error.main
          : theme.palette.type === "dark"
          ? "lightblue"
          : theme.palette.success.main,
      },
    },
  }));

const SetUserAnswerField = ({ userAnswer, isIncorrect, customField }) => (
  <>
    <Typography
      className={cls(isIncorrect)().root}
      style={{ padding: "0px ! important" }}
    >
      {isIncorrect ? "Incorrect" : "Correct"} &nbsp;
    </Typography>
    {customField || (
      <AnswerReadField
        answer={userAnswer}
        name="userAnswer"
        title="Your answer"
      />
    )}
  </>
);

//  theory read show for Learn
export const LearnShowExtraFields = ({ cardData, userAnswer, isIncorrect }) => {
  return (
    <>
      <ListShowExtraFields cardData={cardData} />
      {SetUserAnswerField({ userAnswer, isIncorrect })}
    </>
  );
};

//picture read show for Learn
export const LearnSFSPicture = ({ cardData, userAnswer, isIncorrect }) => {
  return (
    <>
      <ListSFSPicture cardData={cardData} />
      {SetUserAnswerField({ userAnswer, isIncorrect })}
    </>
  );
};

//code read show for Learn
export const LearnSFSCode = ({ cardData, userAnswer, isIncorrect }) => {
  return (
    <>
      <ListSFSCode cardData={cardData} />
      {SetUserAnswerField({
        userAnswer,
        isIncorrect,
        customField: (
          <CQAReadField code={userAnswer} label={"userAnswer"} list />
        ),
      })}
    </>
  );
};

// add correct // incorrect
