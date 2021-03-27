// import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { GridTextField } from "./read";
// import useStyles from "./styles";

// export const GridWriteTextField = ({
//   value,
//   onChange,
//   name,
//   label = name,
//   xs = 12,
//   sm = 12,
//   variant = "outlined",
//   ...props
// }) => {
//   const classes = useStyles();
//   // console.log(props?.className ? props.className : classes.write);
//   return (
//     <Grid item xs={xs} sm={sm}>
//       <TextField
//         name={name}
//         variant={variant}
//         label={name}
//         fullWidth
//         multiline
//         rows={4}
//         value={value}
//         onChange={onChange}
//         className={classes.commonFieldWrite}
//         {...props}
//       />
//     </Grid>
//   );
// };

// picture and theory
export const QuestionWriteField = ({ setCardData, cardData }) => {
  return (
    <GridTextField
      writable
      value={cardData?.question?.[0] || ""}
      name="question"
      onChange={(e) => setCardData({ ...cardData, question: [e.target.value] })}
    />
  );
};

// picture and theory
export const AnswerWriteField = ({ setCardData, cardData }) => {
  return (
    <GridTextField
      writable
      value={cardData?.answer || ""}
      name="answer"
      onChange={(e) => setCardData({ ...cardData, answer: e.target.value })}
    />
  );
};

export const UserAnswerWriteField = ({ setUA, userAnswer }) => {
  return (
    <GridTextField
      writable
      learn
      value={userAnswer || ""}
      name="userAnswer"
      onChange={(e) => setUA(e.target.value)}
    />
  );
};

// export const QAWriteField = ({ setCardData, cardData, spec, ...props }) => {
//   return (
//     <GridWriteTextField
//       value={cardData[spec][0] || ""}
//       name={`${spec}`}
//       onChange={(e) => setCardData({ ...cardData, [spec]: e.target.value })}
//       {...props}
//     />
//   );
// };
