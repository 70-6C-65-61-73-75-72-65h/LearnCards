import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import moment from "moment";

import { Link } from "react-router-dom";

import { checkCard, deleteCard } from "../../../../actions/cards";
import useStyles from "./styles";
import { subSpeciesRelation } from "../../../../utils/GetTypeRelativeComponents";
import CardItemCode from "./CardItemTypes/CardItemCode";
import CardItemPicture from "./CardItemTypes/CardItemPicture";
import CardItemTheory from "./CardItemTypes/CardItemTheory";
// import { streamCardPicSrc } from "../../../../api";

const relativeComponents = [CardItemCode, CardItemPicture, CardItemTheory];

const getRelativeComponent = subSpeciesRelation(relativeComponents);

const CardItem = ({ cardItem }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      {/* <CardContent> */}
      {/* <card id="cardPlayer" width="650" controls muted="muted" autoPlay>
          <source
            src={`http://localhost:${process.env.REACT_APP_PORT}/media/file/${cardItem.filename}`}
            type="card/mpeg"
          />
        </card> */}
      {/* </CardContent> */}
      <div className={classes.overlay}>
        <Typography variant="caption" component="h3" gutterBottom>
          {cardItem.ownerName}
        </Typography>

        <Typography variant="body2" gutterBottom>
          {moment(cardItem.createdAt).fromNow()}
        </Typography>
      </div>

      {user?.result?._id === cardItem?.ownerId && (
        <div className={classes.overlay2}>
          <Button
            component={Link}
            to={`/card/update/${cardItem._id}`}
            // variant="contained"
            color="secondary"
            // onClick={() => localStorage.setItem("selectedCardId", cardItem._id)}
            // {() => dispatch(updateAudioCard(cardItem._id, ))}
            // style={{ color: "white" }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}

      {/* <Typography variant="body2" gutterBottom>
        {cardItem.lyrics}
      </Typography> */}

      <CardContent className={classes.content}>
        {getRelativeComponent(cardItem._type, { cardItem })}
      </CardContent>

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        <Typography variant="caption" className={classes.caption}>
          Theme: &nbsp;
        </Typography>
        {cardItem.theme}
      </Typography>

      <Typography
        className={classes.topic}
        gutterBottom
        // variant="h5"
        component="h5"
      >
        <Typography variant="caption" className={classes.caption}>
          Topic: &nbsp;
        </Typography>

        {cardItem.topic}
      </Typography>

      <Typography
        component="a"
        className={classes.urlSrc}
        href={cardItem.urlSrc}
        rel="noreferrer"
        target="_blank"
      >
        Source
      </Typography>
      {/* user?.result?.googleId === cardItem?.ownerId || */}
      <CardActions className={classes.cardActions}>
        {user?.result?._id === cardItem?.ownerId && (
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deleteCard(cardItem._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CardItem;
