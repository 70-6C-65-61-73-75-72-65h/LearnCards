import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
const CardItemTheory = ({ cardItem }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.text}>
      <Typography variant="caption" className={classes.caption}>
        Question:
      </Typography>
      {"\n" + cardItem.question}
    </Typography>
  );
};

export default CardItemTheory;
