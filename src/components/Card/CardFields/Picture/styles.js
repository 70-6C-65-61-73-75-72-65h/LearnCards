import { fade, makeStyles } from "@material-ui/core/styles";
import { coverPicture } from "../../../../mixins/styles";

const readPicture = (theme) => ({
  height: 0,
  margin: theme.spacing(0, 2),
  borderRadius: "8px",
  paddingTop: theme.spacing(30),
  backgroundColor: fade(theme.palette.secondary.main, 0.3),
  backgroundBlendMode: theme.palette.type === "dark" ? "darken" : "lighten",
});

export default makeStyles((theme) => ({
  // read
  readPicture: {
    ...readPicture(theme),
  },

  readPictureShowLearn: {
    ...readPicture(theme),
    paddingTop: theme.spacing(12),
  },

  // write
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pictureContainer: {
    width: "80%",
    height: "400px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "40px",
    margin: theme.spacing(1, 0),
  },
  picture: {
    ...coverPicture({ borderRadius: "40px" }),
  },
  button: {
    width: "80%",
    borderRadius: "10px",
    backgroundColor: theme.palette.secondary.main,
  },
}));
