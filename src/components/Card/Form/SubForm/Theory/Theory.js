import { Grid, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";

const theoryState = {
  question: "",
  answer: "",
  _type: "theory",
};

const Theory = ({ setCardData, cardData }) => {
  useEffect(() => {
    // if cant find apropp field  => will fill with '' => but if has (update session) => nothing to do with it
    for (let key in theoryState) {
      if (cardData[key] === void 0) {
        setCardData((prev) => ({ ...prev, [key]: theoryState[key] }));
      }
    }
  }, [cardData, setCardData]);

  const classes = useStyles();

  return (
    // fix offset
    <Grid container className={classes.theoryWrapper}>
      <Grid item xs={12} sm={12}>
        <TextField
          name="question"
          variant="outlined"
          label="question"
          fullWidth
          multiline
          rows={4}
          value={cardData.question || ""}
          onChange={(e) =>
            setCardData({ ...cardData, question: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12} sm={12} className={classes.textFieldWrapper}>
        <TextField
          name="answer"
          variant="outlined"
          label="answer"
          multiline
          fullWidth
          value={cardData.answer || ""}
          onChange={(e) => setCardData({ ...cardData, answer: e.target.value })}
        />
      </Grid>
    </Grid>
  );
};

export default Theory;
