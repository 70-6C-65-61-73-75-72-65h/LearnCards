// import React from "react";

// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";

// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css";

// import { TextField, Typography } from "@material-ui/core";
// import useStyles from "./styles";
// import { GridReadTextField } from "../Common/read";
// import pretty from "pretty";
// import { js_beautify } from "js-beautify";

// // beautify(data, { indent_size: 2, space_in_empty_paren: true });
// const CodeQuestionField = ({ cardItem }) => {
//   // console.log(cardItem.code);
//   // console.log(pretty(cardItem.code));
//   const classes = useStyles();
//   return (
//     <Typography className={`${classes.text} ${classes.code}`}>
//       <Typography variant="caption" className={classes.caption}>
//         Code:
//       </Typography>
//       {/* {"\n" +
//         js_beautify(cardItem.code, {
//           indent_size: 2,
//           space_in_empty_paren: true,
//         })} */}
//       {/* {"\n" + pretty(cardItem.code)} */}
//       {"\n" + cardItem.code}
//     </Typography>
//   );
// };

// export default CodeQuestionField;

// TODO chenge question to object {startString: str, endString:str, answerLen: int}
// export const CodeReadQuestionField = ({ cardData }) => {
//   return (
//     <GridReadTextField
//       value={cardData.question.join("________")}
//       name={`question`}
//     />
//   );
// };
// export const CodeReadAnswerField = ({ cardData }) => {
//   return <GridReadTextField value={cardData.answer} name={`answer`} />;
// };

//  TODO create CodeRead fields with highlight

import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { highlight, languages } from "prismjs/components/prism-core";

import { TextField, Grid } from "@material-ui/core";

// it could be question ar answer to read
export function CQAReadField({
  code,
  label,
  xs = 12,
  sm = 12,
  // rows = 4,
  variant = "outlined",
  language = "js", //languages.js,
  ...props
}) {
  console.log(label);
  console.log(code);
  const classes = useStyles();
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <Grid
      item
      xs={xs}
      sm={sm}
      className={`${
        props?.list ? classes.codeContainerList : classes.codeContainer
      }`}
    >
      <label
        className={props?.list ? classes.codeLabelList : classes.codeLabel}
      >
        {label}
      </label>

      <div
        className={`${props?.list ? classes.codeBoxList : classes.codeBox}   `}
      >
        <code className={`language-${language} ${classes.codeArea}`}>
          {label === "question" ? code.join("________") : code}
        </code>
      </div>
    </Grid>
  );
}

//  <label
//       className={
//         props?.list
//           ? `${classes.codeLabel} ${classes.codeLabelList}`
//           : classes.codeLabel
//       }
//     >
//       {label}
//     </label>

//  ${ props.classNameCodeBox  }
