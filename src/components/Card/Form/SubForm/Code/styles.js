import { makeStyles } from "@material-ui/core/styles";
import {
  normalTextArea,
  scrollStyleMixin,
  textareaBig,
} from "../../../../../mixins/styles";

export default makeStyles((theme) => ({
  codeWrapper: {
    backgroundColor: theme.palette.primary.contrastText,
    margin: `${theme.spacing(1.5)}px 0`,
    borderRadius: theme.spacing(1.5),
    ...scrollStyleMixin(theme),
    ...textareaBig(theme),
  },
  wholeBunch: {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    ...normalTextArea(theme),
  },
  // pre: {
  // },
  code: {
    "&:focus": {
      outline: "none",
    },
  },
}));
