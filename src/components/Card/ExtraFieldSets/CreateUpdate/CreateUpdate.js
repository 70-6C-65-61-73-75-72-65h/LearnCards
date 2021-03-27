//props extraState

import useCardExtraFields from "../../../../hooks/useCardExtraFields";
import { CodeWriteField } from "../../CardFields/Code/write";
import { CQAReadField } from "../../CardFields/Code/read";
import { PictureWriteField } from "../../CardFields/Picture/write";
import {
  QuestionWriteField,
  AnswerWriteField,
} from "../../CardFields/Common/write";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

export const CreateUpdateExtraFields = ({
  setCardData,
  cardData,
  extraState,
  extraField,
}) => {
  useCardExtraFields({ setCardData, cardData, extraState });
  return (
    <>
      {extraField}
      <QuestionWriteField setCardData={setCardData} cardData={cardData} />
      <AnswerWriteField setCardData={setCardData} cardData={cardData} />
    </>
  );
};

// CreateUpdateCodeFieldSet
export const CUFSCode = ({
  extraState,
  // handleSubmit,
  // ...cardProps // { setCardData, cardData}
  setCardData,
  cardData,
}) => {
  // const codeProps = { handleSubmit, ...cardProps };
  // const qaProps = { extraState, ...cardProps };
  useCardExtraFields({ setCardData, cardData, extraState });
  return (
    <>
      <CodeWriteField setCardData={setCardData} cardData={cardData} />
      {/* initial ony for create-update */}
      <CQAReadField
        // initialCode={cardData.code || ""}
        code={cardData.question || [""]}
        label={"question"}
      />
      <CQAReadField
        // initialCode={cardData.code || ""}
        code={cardData.answer || ""}
        label={"answer"}
      />
      {/* rows={1} */}
    </>
  );
  //  (
  //   <CreateUpdateExtraFields
  //     {...qaProps}
  //     extraField={<CodeWriteField {...cardProps} />}
  //   />
  // );
};

// CreateUpdatePictureFieldSet
export const CUFSPicture = ({
  extraState,
  ...cardProps // { setCardData, cardData}
}) => {
  const qaProps = { extraState, ...cardProps };
  return (
    <CreateUpdateExtraFields
      {...qaProps}
      extraField={<PictureWriteField {...cardProps} />}
    />
  );
};

// CreateUpdateTheoryFieldSet
export const CUFSTheory = ({
  extraState,
  ...cardProps // { setCardData, cardData}
}) => {
  // const classes = useStyles();
  const qaProps = { extraState, ...cardProps };
  return (
    // <Grid container className={classes.theoryWrapper}>
    <CreateUpdateExtraFields {...qaProps} />
    // </Grid>
  );
};
