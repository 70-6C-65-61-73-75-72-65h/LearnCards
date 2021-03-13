import { makeStyles } from "@material-ui/core/styles";
import { normalTextArea, scrollStyleMixin } from "../../../../../mixins/styles";

export default makeStyles((theme) => ({
  theoryWrapper: {
    position: "relative",
    left: -theme.spacing(1),
    "& * > *": {
      "& .MuiInputBase-input": {
        padding: `${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        ...scrollStyleMixin(theme),
        ...normalTextArea(theme),
        borderRadius: theme.spacing(1),
      },
      "& .MuiInputBase-root": {
        padding: 0,
        margin: 0,
      },
    },
  },
}));
