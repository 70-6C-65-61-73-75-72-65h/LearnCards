export const scrollStyleMixin = (theme) => ({
  overflowY: "scroll",
  cursor: "auto",

  /* Works on Chrome, Edge, and Safari */
  "&::-webkit-scrollbar": {
    width: theme.spacing(1.5),
  },
  "&::-webkit-scrollbar-track-piece": {
    "box-shadow": `inset 0 0 ${theme.spacing(1)}px rgba(0,0,0,0.3)`,
    borderRadius: `0 ${theme.spacing(0.75)}px ${theme.spacing(0.75)}px 0`,
    backgroundColor: theme.palette.primary.contrastText,
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
