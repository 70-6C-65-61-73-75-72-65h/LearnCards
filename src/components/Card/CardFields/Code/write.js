import React, { useRef, useEffect } from "react";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

import useStyles from "./styles";
import { TextField, Grid } from "@material-ui/core";

// const [userAnswer, setUserAnswer] = useState('')

import PropTypes from "prop-types";

export const CodeWriteField = ({
  setCardData,
  cardData,
  stateTarget = "code",
  // ...props
}) => {
  // stateTarget = userAnswer || code

  // learn form
  const classes = useStyles();

  const ref = useRef(null);

  // it would work only with code target
  const saveCodeAnswerQuestion = (e) => {
    e.preventDefault();

    //selectionElement for editor field
    const el = ref.current._input;
    // console.log(ref.current._input.selectionStart); //.children[1].children[0]
    let start = 0;
    let end = 0;
    if (
      typeof el.selectionStart == "number" &&
      typeof el.selectionEnd == "number"
    ) {
      start = el.selectionStart;
      end = el.selectionEnd;
    }
    console.log("start :" + start + " End :" + end);
    if (start === end) return; //if not selected

    const answer = cardData.code.substring(start, end);
    const question = [
      cardData.code.substring(0, start),
      cardData.code.substring(end, cardData.code.length),
    ];
    // could be all ''
    console.log(answer);
    console.log(cardData.question);
    console.log(question);
    setCardData((card) => ({ ...card, answer, question: [...question] }));
  };

  // it would work only with code target
  const removeCodeAnswerQuestion = (e) => {
    e.preventDefault();
    setCardData((card) => ({ ...card, answer: "", question: [""] }));
  };

  // console.log(cardData[stateTarget]);
  return (
    <Grid
      xs={12}
      sm={12}
      item
      className={
        classes[`codeContainerWrite${stateTarget === "code" ? "" : "Learn"}`]
      }
    >
      <label
        className={
          stateTarget === "code"
            ? classes.codeLabelWrite
            : classes.codeLabelLearn
        }
      >
        {stateTarget}
      </label>
      <div
        className={
          classes[`codeWrapper${stateTarget === "code" ? "" : "Learn"}`]
        }
      >
        <Editor
          ref={ref}
          value={
            stateTarget === "code"
              ? cardData[stateTarget] || ""
              : cardData || ""
          }
          onValueChange={(code) =>
            stateTarget === "code"
              ? setCardData({ ...cardData, [stateTarget]: code })
              : setCardData(code)
          }
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          preClassName={classes.pre}
          textareaClassName={classes.code}
          className={classes.wholeBunch}
          placeholder={
            stateTarget === "code"
              ? "Нажмите сюда, чтобы записать код..."
              : "Введите отсутствующий код..."
          }
          // onFocus={}
          onKeyDown={(e) => {
            // e.key === "Enter" && e.ctrlKey && handleSubmit(e); // to submit
            if (stateTarget === "code") {
              (e.key === "s" || e.key === "і" || e.key === "ы") &&
                e.ctrlKey &&
                saveCodeAnswerQuestion(e); // to save selected code fragment === answer
              (e.key === "d" || e.key === "в") &&
                e.ctrlKey &&
                removeCodeAnswerQuestion(e); // to remove all answers
            }
          }}
        />
      </div>
    </Grid>
  );
};

CodeWriteField.propTypes = {
  stateTarget: PropTypes.oneOf([void 0, "userAnswer"]),
};

// npm__react-simple-code-editor__textarea - ???
// pre tag that hold all text

// export const CodeUserAnswerWriteField = ({ setUserAnswer, userAnswer }) => {
//   // learn form
//   const classes = useStyles();

//   return (
//     <>
//       <div className={`${classes.codeWrapper} `}>
//         <Editor
//           value={userAnswer || ""}
//           onValueChange={(code) => setUserAnswer(code)}
//           highlight={(code) => highlight(code, languages.js)}
//           padding={10}
//           // preClassName={classes.pre}
//           textareaClassName={classes.code}
//           className={classes.wholeBunch}
//           placeholder={"Write missing code..."}
//           // onKeyDown={(e) => {
//           //   // e.key === "Enter" && e.ctrlKey && handleSubmit(e); // to submit
//           // }}
//         />
//       </div>
//     </>
//   );
// };

// export const CodeWriteField = ({ setCardData, cardData }) => {
//   const classes = useStyles();

//   const ref = useRef(null);

//   const saveCodeAnswerQuestion = (e) => {
//     e.preventDefault();

//     //selectionElement for mui textfield
//     const el = ref.current.children[1].children[0];
//     // console.log(ref.current.children[1].children[0]); //.children[1].children[0]
//     let start = 0;
//     let end = 0;
//     if (
//       typeof el.selectionStart == "number" &&
//       typeof el.selectionEnd == "number"
//     ) {
//       start = el.selectionStart;
//       end = el.selectionEnd;
//     }
//     console.log("start :" + start + " End :" + end);
//     if (start === end) return; //if not selected

//     const answer = cardData.code.substring(start, end);
//     const question = [
//       cardData.code.substring(0, start),
//       cardData.code.substring(end, cardData.code.length),
//     ];
//     // could be all ''
//     console.log(answer);
//     console.log(cardData.question);
//     console.log(question);
//     setCardData((card) => ({ ...card, answer, question: [...question] }));
//   };

//   const removeCodeAnswerQuestion = (e) => {
//     setCardData((card) => ({ ...card, answer: "", question: [""] }));
//   };

//   return (
//     <Grid item xs={12} sm={12}>
//       <TextField
//         name={"code"}
//         variant={"outlined"}
//         label={"code"}
//         fullWidth
//         multiline
//         value={cardData?.code || ""}
//         onChange={(e) => setCardData({ ...cardData, code: e.target.value })}
//         ref={ref}
//         rows={4}
//         className={classes.codeWrite}
//         onKeyDown={(e) => {
//           // e.key === "Enter" && e.ctrlKey && handleSubmit(e); // to submit
//           e.key === "s" && e.ctrlKey && saveCodeAnswerQuestion(e); // to save selected code fragment === answer
//           e.key === "d" && e.ctrlKey && removeCodeAnswerQuestion(e); // to remove all answers
//         }}
//       />
//     </Grid>
//   );
// };
