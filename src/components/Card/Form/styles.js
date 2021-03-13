import { fade, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      padding: "0px",
      borderRadius: theme.spacing(1),
    },
    '& *[class*="PrivateNotchedOutline-root-"]': {
      borderWidth: "0px",
    },
    "& .MuiInputLabel-formControl": { color: theme.palette.info.dark },
    "& .MuiInputLabel-shrink": {
      top: -theme.spacing(1),
      color: theme.palette.primary.contrastText,
    },
    '& *[class*="PrivateNotchedOutline-legendLabelled-"]': {
      display: "none",
    },
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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  extraFields: { textAlign: "center" },
  cardThemeHeading: {
    color: theme.palette.info.main,
  },
  heading: {
    color: theme.palette.primary.contrastText,
  },
  regularField: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
}));
