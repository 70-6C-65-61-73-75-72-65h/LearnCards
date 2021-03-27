import { CQAReadField } from "../../CardFields/Code/read";
import { QuestionReadField } from "../../CardFields/Common/read";
import { PictureReadField } from "../../CardFields/Picture/read";
// import {
//   QuestionWriteField,
//   AnswerWriteField,
// } from "../../CardFields/Common/write";

import useStyles from "./styles";

//  heory read for list
export const ListExtraFields = ({ cardData, extraField, ...props }) => {
  // const classes = useStyles();
  return (
    <>
      {extraField}
      <QuestionReadField
        question={cardData?.question}
        {...props}
        // classNamePic={
        //   extraField ? classes.picQuestionHeight : classes.noPicQuestionHeight
        // }
        // rowsMax={extraField ? void 0 : 17}
      />
    </>
  );
};

//picture read for list
// , learn = false
export const ListFSPicture = ({ cardData }) => {
  const classes = useStyles();
  return (
    <ListExtraFields
      cardData={cardData}
      extraField={<PictureReadField cardData={cardData} />}
      classNameBlock={classes.picOffset}
    />
  );
};

// , learn=false
export const ListFSCode = ({ cardData }) => {
  return (
    <CQAReadField
      code={cardData.question}
      label={"question"}
      list
      // classNameCodeBox={classes.codeMargin}

      // rows={8}
      // className={"codeContainer"}
    />
  );
};

// MuiGrid-root makeStyles-commonFieldReadParent-38 undefined MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12

//  MuiFormControl-root MuiTextField-root makeStyles-commonFieldRead-39   MuiFormControl-fullWidth

// MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth Mui-focused Mui-focused MuiInputBase-formControl MuiInputBase-multiline MuiOutlinedInput-multiline

// display:contents,

// MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline

// display: flex, flexGrow: 1, padding: 0
