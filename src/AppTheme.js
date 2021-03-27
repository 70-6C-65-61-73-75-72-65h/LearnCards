import { createMuiTheme, createStyles } from "@material-ui/core/styles";

import {
  brown,
  grey,
  cyan,
  purple,
  blue,
  green,
  red,
  orange,
  yellow,
  pink,
} from "@material-ui/core/colors";

const CustomOverrides = {
  MuiFormControl: {
    root: {
      borderRadius: "8px !important",
    },
  },
  MuiInputBase: {
    input: { borderRadius: "8px !important" },
    multiline: { borderRadius: "8px !important" },
  },

  MuiTextField: {
    root: {
      margin: "8px",
      // padding: "0px",
    },
  },
  PrivateNotchedOutline: {
    root: {
      border: "none !important",
      // margin: "0px !important",
      // padding: "0px !important",
    },
  },
};

const dark = createMuiTheme({
  typography: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
  palette: {
    type: "dark",
    background: {
      default: "black",
      paper: green[900],
    },
    primary: {
      main: green[900],
    },
    secondary: {
      main: grey[500],
    },
    success: {
      main: orange[500],
    },
    info: {
      main: pink[200],
      active: pink[100],
    },
    error: {
      main: "rgb(207, 0, 15)",
    },
  },
  overrides: {
    ...CustomOverrides,
  },
});
const light = createMuiTheme({
  typography: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
  palette: {
    type: "light",
    background: {
      default: "white",
      paper: blue[900],
    },
    primary: {
      // main: teal[50],
      main: blue[900],
      light: blue[100],
    },
    secondary: {
      main: cyan[500],
    },
    success: {
      main: green[300],
    },
    info: {
      main: red[500],
      active: red[800],
    },
    error: {
      main: "rgb(207, 0, 15)",
    },
  },
  overrides: {
    ...CustomOverrides,
  },
});
const AppThemes = { dark, light };
export default AppThemes;

//  "&::-webkit-scrollbar": {
//         width: theme.spacing(1.5),
//       },

//       "&::-webkit-scrollbar-track-piece": {
//         "-webkit-box-shadow": `inset 0 0 ${theme.spacing(1)}px rgba(0,0,0,0.3)`,
//         borderRadius: `0 ${theme.spacing(0.75)}px ${theme.spacing(0.75)}px 0`,
//         backgroundColor: theme.palette.primary.contrastText,
//       },

//       "&::-webkit-scrollbar-thumb": {
//         borderRadius: theme.spacing(1.5),
//         backgroundColor: theme.palette.info.main,
//         "-webkit-box-shadow": `inset 0 0 ${theme.spacing(1)}px rgba(0,0,0,0.5)`,
//       },
