import { Grid, TextField } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

export const GridTextField = ({
  value,
  name,
  label = name,
  xs = 12,
  sm = 12,
  variant = "outlined",
  writable,
  onChange,
  learn,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={xs}
      sm={sm}
      className={
        writable
          ? learn
            ? `${classes.commonFieldReadParent} ${props.classNameBlock}`
            : ` `
          : `${classes.commonFieldReadParent} ${props.classNameBlock}`
      }
    >
      <TextField
        rows={writable ? (learn ? void 0 : 4) : void 0}
        name={name}
        variant={variant}
        label={name}
        defaultValue={value}
        fullWidth
        multiline
        InputProps={{
          readOnly: writable ? false : true,
        }}
        focused
        className={
          writable
            ? learn
              ? `${classes.commonFieldRead}`
              : `${classes.commonFieldWrite}`
            : `${classes.commonFieldRead}`
        }
        onChange={writable ? onChange : void 0}
      />
    </Grid>
  );
};
//  ${props.classNamePic}

// picture and theory and code(without highlight)
export const QuestionReadField = ({ question, ...props }) => {
  return (
    <GridTextField
      value={question?.join("________")}
      name={`question`}
      {...props}
    />
  );
};

// picture and theory and code(without highlight)
export const AnswerReadField = ({ answer, ...props }) => {
  return <GridTextField value={answer} name={`answer`} {...props} />;
};

// MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline : { height: '352px'}
