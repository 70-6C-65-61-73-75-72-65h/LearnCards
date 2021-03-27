import { makeStyles } from "@material-ui/core/styles";
import {
  regularTextFieldList,
  regularTextField,
  labelListField,
} from "../../../../mixins/styles";

export default makeStyles((theme) => ({
  commonFieldWrite: {
    ...regularTextField(theme),
  },
  commonFieldReadParent: {
    display: "contents",

    "& .Mui-focused": {
      display: "contents",
    },
    "& .MuiOutlinedInput-inputMultiline": {
      width: `calc(100% - ${theme.spacing(4)}px - 20px)`,
      margin: `${theme.spacing(2)}px !important`,
    },
    "& .MuiOutlinedInput-inputMultiline:nth-child(2)": {
      display: "none",
      // margin: "0px !important",
      // padding: "0px !important",
    },
    "&  .MuiInputBase-input ": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      padding: "0px !important",
      alignSelf: "stretch",
    },

    // "& .": {
    //   margin: theme.spacing(2),
    // },
  },

  commonFieldRead: {
    display: "contents",
    ...regularTextFieldList(theme),
    ...labelListField(theme),
    // ...labelBaseField(theme),
  },

  // commonFieldAnswerWrite: {
  //   display: "contents",
  //   ...regularTextFieldList(theme),
  //   ...labelListField(theme),
  //   // ...labelBaseField(theme),
  // },
}));
