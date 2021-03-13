import React, { useState, useEffect, useCallback } from "react";
import {
  Grid,
  CircularProgress,
  TextField,
  InputAdornment,
  Paper,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "./Item/CardItem";
import { fetchCards } from "../../../actions/cards";
// import Input from "../../Auth/input";
import useStyles from "./styles";

const CardList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.cards);

  useEffect(() => {
    // console.log(query);
    // if (query === "") {
    dispatch(fetchCards());
    // }
  }, [dispatch]);

  console.log(cards);

  return (
    <Grid
      container
      spacing={5}
      alignItems="stretch"
      className={classes.catalog}
    >
      {cards?.length === void 0 ? (
        <CircularProgress />
      ) : (
        <Grid container alignItems="stretch" spacing={3}>
          {cards.map((cardItem) => (
            <Grid key={cardItem._id} item xs={12} sm={6} md={6}>
              <CardItem cardItem={cardItem} />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};
export default CardList;

// if (cards?.length === 0 && query !== "") {
//   return <Paper component="h4"> There is nothing found for this query</Paper>;
// }
