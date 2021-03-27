// import { CodeReadField } from "../../CardFields/Code/read";
import { CQAReadField } from "../../CardFields/Code/read";
import {
  QuestionReadField,
  AnswerReadField,
} from "../../CardFields/Common/read";
import { PictureReadField } from "../../CardFields/Picture/read";
import useStyles from "./styles";

//  theory read show for list
export const ListShowExtraFields = ({ cardData, extraField }) => {
  return (
    <>
      {extraField}
      <QuestionReadField question={cardData?.question} />
      <AnswerReadField answer={cardData?.answer} />
    </>
  );
};

//picture read show for list
export const ListSFSPicture = ({ cardData }) => {
  const classes = useStyles();
  return (
    <ListShowExtraFields
      cardData={cardData}
      extraField={
        <PictureReadField
          cardData={cardData}
          classNameBlock={classes.picOffset}
          learn
        />
      }
    />
  );
};

//code read show for list
// export const ListSFSCode = ({ cardData }) => {
//   return (
//     <ListShowExtraFields
//       cardData={cardData}
//       extraField={<CodeReadField cardData={cardData} />}
//     />
//   );
// };

export const ListSFSCode = ({ cardData }) => {
  // const classes = useStyles();
  return (
    <>
      <CQAReadField
        code={cardData.question}
        label={"question"}
        list
        // classNameCodeBox={classes.codeMargin}
      />
      <CQAReadField
        code={cardData.answer}
        label={"answer"}
        list
        // classNameCodeBox={classes.codeMargin}
      />
    </>
  );
};
