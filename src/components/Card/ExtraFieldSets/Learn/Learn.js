import { CodeWriteField } from "../../CardFields/Code/write";
import { UserAnswerWriteField } from "../../CardFields/Common/write";
import { ListExtraFields, ListFSPicture, ListFSCode } from "../List/List";

const SetAnswerField = ({ userAnswer, setUA }) => (
  <UserAnswerWriteField userAnswer={userAnswer} setUA={setUA} />
);

export const LearnExtraFields = ({ cardData, userAnswer, setUA }) => {
  return (
    <>
      <ListExtraFields cardData={cardData} learn />
      {SetAnswerField({ userAnswer, setUA })}
    </>
  );
};

//picture read for list
// Learn field set Picture
export const LearnFSPicture = ({ cardData, userAnswer, setUA }) => {
  return (
    <>
      <ListFSPicture cardData={cardData} />
      {SetAnswerField({ userAnswer, setUA })}
    </>
  );
};

export const LearnFSCode = ({ cardData, userAnswer, setUA }) => {
  return (
    <>
      <ListFSCode cardData={cardData} />
      <CodeWriteField
        cardData={userAnswer}
        setCardData={setUA}
        stateTarget={"userAnswer"}
      />
      {/* {SetAnswerField({ userAnswer, setUA })} */}
    </>
  );
};
