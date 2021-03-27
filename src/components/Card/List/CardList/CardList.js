import React, { useState, useEffect, useCallback } from "react";
import {
  Grid,
  CircularProgress,
  TextField,
  InputAdornment,
  Paper,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../Item/CardListItem";
import { fetchAllCards } from "../../../../actions/cards";
// import Input from "../../Auth/input";
import useStyles from "./styles";

const CardList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.cards);

  useEffect(() => {
    dispatch(fetchAllCards());
  }, [dispatch]);

  console.log(cards);

  return (
    <>
      {cards?.length === void 0 ? (
        <CircularProgress />
      ) : (
        <Grid
          container
          alignItems="flex-start"
          spacing={3}
          // className={classes.catalog}
        >
          {cards.map((cardData) => (
            <Grid key={cardData._id} item xs={12} sm={6} md={6}>
              <CardItem cardData={cardData} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
export default CardList;

// if (cards?.length === 0 && query !== "") {
//   return <Paper component="h4"> There is nothing found for this query</Paper>;
// }
