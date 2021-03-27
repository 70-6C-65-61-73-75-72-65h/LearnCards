import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { commonFieldsOverflow } from "../../../../mixins/styles";

export const cardFlipBackAndFront = (theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  // height: "100%",
  height: "700px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "-webkit-backface-visibility": "hidden",
  backfaceVisibility: "hidden",

  // "& > *": {
  //   border: "1px solid red",
  //   // backgroundColor: 'purple'
  // },
});

export default makeStyles((theme) => ({
  caption: {
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,
  },

  card: {
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.complex,
    }),
    transformStyle: "preserve-3d",
  },

  cardShow: {
    transform: "rotateY(180deg)",
  },

  cardBack: {
    ...cardFlipBackAndFront(theme),
    transform: "rotateY(180deg)",
  },
  cardFront: {
    ...cardFlipBackAndFront(theme),
  },
  cardLearn: {
    // height: "575px",
    // [theme.breakpoints.down("sm")]: {
    //   topicType: { justifyContent: "flex-start", flexDirection: "column" },
    //   cardType: { flexGrow: 0.5, justifyContent: "flex-start" },
    // },
  },

  //
  cardHeader: {
    padding: "16px 16px",
    display: "flex",
    justifyContent: "space-between",
  },

  timeAuthor: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  update: {},
  //
  content: {
    display: "contents",
    // flexGrow: 1
  },
  //
  topicType: {
    padding: "0 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  topic: {
    display: "flex",
    alignItems: "baseline",
  },
  cardType: {
    display: "flex",
    alignItems: "baseline",
  },
  [theme.breakpoints.down("sm")]: {
    topicType: { justifyContent: "flex-start", flexDirection: "column" },
    cardType: { flexGrow: 0.5, justifyContent: "flex-start" },
  },

  //
  title: {
    padding: "0 16px",
    display: "flex",
  },
  cardThemeHeading: {
    ...commonFieldsOverflow(theme),
  },
  //
  urlSrc: {
    display: "flex",
    alignSelf: "center",
    textDecoration: "none",
    textAlign: "center",
    // color: theme.palette.info.contrastText,
    color: theme.palette.info.main,
    "&:hover": {
      color: theme.palette.info.contrastText,
      // backgroundColor: fade(theme.palette.info.active, 0.5),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        color: theme.palette.info.main,
      },
    },
  },
  //
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
}));
