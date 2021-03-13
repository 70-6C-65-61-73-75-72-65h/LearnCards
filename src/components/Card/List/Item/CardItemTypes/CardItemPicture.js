import { CardMedia } from "@material-ui/core";
import React from "react";
import { streamCardPicSrc } from "../../../../../api";
import useStyles from "./styles";

const CardItemPicture = ({ cardItem }) => {
  const classes = useStyles();

  return (
    <CardMedia
      className={classes.picture}
      image={streamCardPicSrc(cardItem.filename)}
      title={cardItem.theme}
    />
  );
};

export default CardItemPicture;
