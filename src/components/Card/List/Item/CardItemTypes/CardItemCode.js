import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
// import pretty from "pretty";
// import { js_beautify } from "js-beautify";

// beautify(data, { indent_size: 2, space_in_empty_paren: true });
const CardItemCode = ({ cardItem }) => {
  // console.log(cardItem.code);
  // console.log(pretty(cardItem.code));
  const classes = useStyles();
  return (
    <Typography className={`${classes.text} ${classes.code}`}>
      <Typography variant="caption" className={classes.caption}>
        Code:
      </Typography>
      {/* {"\n" +
        js_beautify(cardItem.code, {
          indent_size: 2,
          space_in_empty_paren: true,
        })} */}
      {/* {"\n" + pretty(cardItem.code)} */}
      {"\n" + cardItem.code}
    </Typography>
  );
};

export default CardItemCode;
