export const scrollStyleMixin = (theme) => ({
  overflowY: "scroll !important",
  cursor: "auto !important",

  /* Works on Chrome, Edge, and Safari */
  "&::-webkit-scrollbar": {
    width: theme.spacing(1),
    height: theme.spacing(1),
  },

  "&::-webkit-scrollbar-corner": {
    borderRadius: `0 ${theme.spacing(0.75)}px ${theme.spacing(0.75)}px 0`,
  },

  "&::-webkit-scrollbar-track-piece": {
    backgroundColor: "transparent",
    // "box-shadow": `inset 0 0 ${theme.spacing(1)}px rgba(0,0,0,0.3)`,
    // borderRadius: `0 ${theme.spacing(0.75)}px ${theme.spacing(0.75)}px 0`,
    // backgroundColor: theme.palette.primary.contrastText,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: theme.spacing(1.5),
    backgroundColor: theme.palette.primary.dark,
    "box-shadow": `inset 0 0 ${theme.spacing(1)}px rgba(0,0,0,0.5)`,
  },

  /* If its fucking Mozilla */
  "scrollbar-width": "thin",
  "scrollbar-color": `${theme.palette.primary.dark} ${theme.palette.primary.contrastText}`,
});

export const textareaMixin = (theme, { height = 10, ...props }) => ({
  height: theme.spacing(height),
  ...props,
});

export const textareaBig = (theme) => textareaMixin(theme, { height: 30 });
export const textareaMedium = (theme) => textareaMixin(theme, { height: 10 });
export const textareaSmall = (theme) => textareaMixin(theme, { height: 5 });

export const normalTextArea = (theme) => ({
  backgroundColor: "white",
  color: "black",
});

export const coverPicture = ({ ...props }) => ({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  ...props,
});

// 18.5 14

// importantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportantimportant;

export const regularTextField = (theme) => ({
  "& .MuiInputLabel-outlined": {
    position: "absoulte",
    top: `-${theme.spacing(1)}px`,
  },

  "& .MuiOutlinedInput-input": {
    padding: "10px !important",
    margin: 0,
  },

  "& .MuiInputBase-root": {
    padding: "0px",
    margin: "0 10px 0 0",
  },
  "& .MuiInputBase-input": {
    ...scrollStyleMixin(theme),
  },

  backgroundColor:
    theme.palette.type === "dark"
      ? `${theme.palette.primary.dark} !important`
      : `${theme.palette.primary.light} !important`,
  color: theme.palette.secondary.contrastText,
});

export const labelBaseField = (theme) => ({
  "& .MuiInputLabel-shrink": {
    top: -theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
});

export const regularTextFieldList = (theme) => ({
  "& .MuiInputLabel-outlined": {
    position: "absoulte",
    top: `-${theme.spacing(1)}px`,
  },

  "& .MuiOutlinedInput-input,  .MuiOutlinedInput-multiline": {
    padding: "10px !important",
    margin: 0,
  },

  "& .MuiInputBase-root": {
    padding: "0px",
    margin: "0 10px 0 0 !important",
  },
  "& .MuiInputBase-input, .MuiInputBase-multiline": {
    ...scrollStyleMixin(theme),

    backgroundColor:
      theme.palette.type === "dark"
        ? `${theme.palette.primary.dark} !important`
        : `${theme.palette.primary.light} !important`,
    color: theme.palette.secondary.contrastText,
  },
});

export const labelWriteField = (theme) => ({
  "& .MuiInputLabel-formControl": { color: theme.palette.info.dark },
  ...labelBaseField(theme),
  "& .MuiOutlinedInput-multiline": {
    padding: "0px !important",
    margin: 0,
  },
});

// was
// display: "block",
// position: "absolute",
// top: "86px",
// left: "4px",
// zIndex: "1",
export const labelListField = (theme) => ({
  "& .MuiInputLabel-shrink": {
    display: "block",
    position: "relative",
    bottom: `0px`,
    top: "16px",
    left: "4px",
    zIndex: "1",
    color: theme.palette.primary.contrastText,
    fontSize: theme.spacing(2),
  },
});

// if we keep border but we dont want to keep label block border
// '& *[class*="PrivateNotchedOutline-legendLabelled-"]': {
//   display: "none",
// },

export const codeTheoryListQuestionHeight = (theme) => ({
  // question margin top 18px + 240px (pictureHeight) + questionHeight (94px)
  height: "352px",
});
export const pictureQuestionHeight = (theme) => ({
  height: "94px",
});

export const commonFieldsOverflow = (theme) => ({
  maxWidth: "200px",
  maxHeight: "1.5em",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
