import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import React, { useState } from "react";
import { streamCardPicSrc } from "../../../../api";
import { scrollStyleMixin } from "../../../../mixins/styles";

import useStyles from "./styles";

const useExtraStyles = makeStyles((theme) => ({
  dialog: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "10px solid rgba(0,0,0,0.3)",
    backgroundClip: "padding-box",
    zIndex: 4,
    overflowX: "scroll !important",
    ...scrollStyleMixin(theme),
  },
}));

export const PictureReadField = ({ cardData }) => {
  const classes = useStyles();

  const dialogClasses = useExtraStyles();

  const [open, setOpen] = useState(false);
  const resizeImg = () => {
    setOpen((prev) => !prev);
  };
  if (open) {
    return (
      <div className={dialogClasses.dialog} onClick={resizeImg}>
        <img
          src={streamCardPicSrc(cardData?.filename)}
          title={cardData?.theme}
          alt={"no img"}
        />
      </div>
    );
  }
  return (
    <CardMedia
      className={classes.readPicture}
      image={streamCardPicSrc(cardData?.filename)}
      title={cardData?.theme}
      onClick={resizeImg}
    />
  );
};
