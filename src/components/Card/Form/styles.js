import { fade, makeStyles } from "@material-ui/core/styles";
import {
  regularTextField,
  labelWriteField,
  commonFieldsOverflow,
} from "../../../mixins/styles";

export default makeStyles((theme) => ({
  root: {
    // "& .MuiFormControl-root ": {
    //   borderRadius: theme.spacing(1),
    // },
    // "& .MuiTextField-root": {
    //   margin: theme.spacing(1),
    //   padding: "0px",
    // },
    ...labelWriteField(theme),
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonSubmit: {
    marginTop: theme.spacing(1),
    marginBottom: 10,
    color: theme.palette.success.contrastText,
    backgroundColor: fade(theme.palette.success.main, 0.7),
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.success.main,
      },
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  extraFields: { textAlign: "center" },
  cardThemeHeading: {
    // display: "flex",
    color: theme.palette.info.main,
    ...commonFieldsOverflow(theme),
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",

    color: theme.palette.primary.contrastText,
  },
  regularField: {
    ...regularTextField(theme),
  },
}));
