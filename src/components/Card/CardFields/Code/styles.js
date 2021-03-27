import { makeStyles } from "@material-ui/core/styles";
import {
  normalTextArea,
  scrollStyleMixin,
  textareaBig,
} from "../../../../mixins/styles";

// local Mixins
const codeWrapper = (theme) => ({
  backgroundColor: theme.palette.primary.contrastText,
  margin: `${theme.spacing(1)}px 0`,
  borderRadius: theme.spacing(1),
  ...scrollStyleMixin(theme),
  ...textareaBig(theme),
});

const codeLabel = (theme) => ({
  fontSize: "12px",
  display: "block",
  position: "absolute",
  left: "14px",
  zIndex: "1",
  color: theme.palette.primary.contrastText,
});

const codeLabelList = (theme) => ({
  ...codeLabel(theme),
  position: "relative",
  top: "8px",
  left: "18px",
});

const codeBox = (theme) => ({
  // padding like in textfield
  // padding: "18.5px 14px",
  margin: `${theme.spacing(2)}px 0px !important`,
  position: "relative",
  padding: "10px",
  backgroundColor: "white",
  borderRadius: theme.spacing(1),
  ...scrollStyleMixin(theme),
});
// local Mixins

export default makeStyles((theme) => ({
  //  ---------------------------------------------------------
  // read question answer code
  codeArea: {
    backgroundColor: "white !important",
    whiteSpace: "pre-wrap !important",
  },

  // -----------------------------
  // for list
  codeBoxList: {
    ...codeBox(theme),
    margin: `${theme.spacing(2)}px ${theme.spacing(2)}px !important`,
    display: "flex",
    flexGrow: 1,
  },

  codeContainerList: {
    display: "contents",
  },

  codeLabelList: { ...codeLabelList(theme) },

  // -----------------------------
  // for create-update
  codeBox: {
    ...codeBox(theme),
  },

  codeContainer: {
    position: "relative",
  },

  codeLabel: { ...codeLabel(theme) },
  //

  //  ---------------------------------------------------------
  //  write code field ( not question or answer )
  codeContainerWrite: {
    position: "relative",
  },

  codeLabelWrite: {
    ...codeLabel(theme),
    top: "-8px",
  },

  codeWrapper: {
    ...codeWrapper(theme),
  },
  wholeBunch: {
    // display: "flex",
    // flexGrow: 1,
    // justifyContent: "stretch",
    // overflow: "scroll",
    display: "block",
    fontFamily: '"Fira code", "Fira Mono", monospace',
    ...normalTextArea(theme),
  },
  code: {
    "&:focus": {
      outline: "none",
      "&::placeholder": {
        color: "white",
      },
    },
    "&::placeholder": {
      color: theme.palette.info.dark,
    },
  },
  pre: {
    color: "black",
  },

  codeContainerWriteLearn: {
    display: "contents",
  },

  codeWrapperLearn: {
    ...codeWrapper(theme),
    margin: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },

  codeLabelLearn: {
    ...codeLabelList(theme),
    top: "0px",
  },
}));
