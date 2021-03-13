import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export default makeStyles((theme) => ({
  urlSrc: {
    textDecoration: "none",
    textAlign: "center",
    // color: theme.palette.info.contrastText,
    color: theme.palette.info.main,
    "&:hover": {
      color: theme.palette.info.contrastText,
      backgroundColor: fade(theme.palette.info.active, 0.5),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        color: theme.palette.info.main,
      },
    },
  },
  content: { paddingTop: "80px" },
  caption: {
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,
  },

  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  topic: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
}));
