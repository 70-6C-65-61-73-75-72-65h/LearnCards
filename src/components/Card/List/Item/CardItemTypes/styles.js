import { fade, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  // if picture type
  picture: {
    height: 0,
    paddingTop: theme.spacing(30),
    backgroundColor: fade(theme.palette.secondary.main, 0.3),
    backgroundBlendMode: theme.palette.type === "dark" ? "darken" : "lighten",
  },
  caption: {
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,
  },
  code: {
    color: theme.palette.primary.contrastText,
    fontFamily: "Consolas",
  },
  text: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.primary.light
        : theme.palette.primary.dark,
    height: theme.spacing(30),
    wordBreak: "break-all",
    overflow: "hidden",
    whiteSpace: "pre-wrap",
  },
}));
