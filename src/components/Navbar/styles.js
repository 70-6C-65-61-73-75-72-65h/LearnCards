import { makeStyles } from "@material-ui/core/styles";

// 'span[class=*"PrivateTabIndicator-root"]': {
//       display: "none",
//       color: "red !important",
//       backgroundColor: "red !important",
//  },

export default makeStyles((theme) => ({
  // for drawer
  list: {
    width: 250,
  },
  tabsRoot: {
    flexGrow: 1,
    display: "flex",
    margin: "20px",
    // "& .MuiTabs-indicator": {
    //   width: "0px !important",
    // },
  },
  smToolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // for navbar
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    // for space betwwen when sm device
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 10px",
  },
  tabs: {
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
  },
  image: {
    margin: theme.spacing(0, 1),
    height: "80px",
  },

  profile: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  brandContainer: {
    flexGrow: 0.5,
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(0, 1),
  },
  avatar: {
    width: "40px",
    height: "40px",
    backgroundColor: theme.palette.info.main,
  },
  userName: {
    margin: theme.spacing(0, 1),
    alignItems: "center",
    overflow: "hidden",
    whiteSpace: "pre-wrap",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: "0",
    margin: theme.spacing(0, 1),
  },
  [theme.breakpoints.down("lg")]: {
    toolbar: { width: "180px", justifyContent: "flex-end" }, // если одна кнопка осталась то сбоку ее()
    userName: { display: "none" },
    profile: { width: "50px" },
  },
  [theme.breakpoints.up("lg")]: {
    toolbar: { flexGrow: 0.5, justifyContent: "space-between" },
    userName: { display: "flex" },
    profile: { width: "200px" },
  },
}));
