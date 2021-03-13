import { makeStyles } from "@material-ui/styles";
import { coverPicture } from "../../../../../mixins/styles";

export default makeStyles((theme) => ({
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
