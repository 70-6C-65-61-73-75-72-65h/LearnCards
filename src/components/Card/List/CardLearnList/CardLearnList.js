import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Grid,
  CircularProgress,
  TextField,
  InputAdornment,
  Paper,
  Button,
  CardActions,
  Card,
  CardContent,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../Item/CardLearnItem";
import { fetchTodayCards } from "../../../../actions/cards";
import { Link } from "react-router-dom";

// import React, { useState, useEffect, useCallback } from "react";
// import {
//   Grid,
//   CircularProgress,
//   TextField,
//   InputAdornment,
//   Paper,
// } from "@material-ui/core";
// import { useSelector, useDispatch } from "react-redux";
// import CardItem from "../Item/CardListItem";
// import { fetchAllCards } from "../../../../actions/cards";
// import Input from "../../Auth/input";
import useStyles from "./styles";
import { useHistory } from "react-router";
import DoubleArrow from "@material-ui/icons/DoubleArrow";

const CardsLearn = () => {
  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.cards);
  const [currentCardIndex, setCCI] = useState(0);

  const [stats, setStats] = useState({});

  const [todayCardsFetched, setTCF] = useState(false);

  console.log(currentCardIndex);
  // currentCardIndex
  useEffect(() => {
    dispatch(fetchTodayCards());
    setTCF(true);
  }, [dispatch]);

  const getNextCard = () => {
    if (cards.length > currentCardIndex) {
      setCCI((prev) => ++prev);
      // }
      // else if (cards.length === currentCardIndex) {
      // then should change to page with congrats - you pass all cards ( or statistics )
    }
    // else if (cards.length > currentCardIndex) {
    //   history.push("/");
    // }
    //get next card from list
    // if ends -> history.push('/')
  };

  if (cards.length === currentCardIndex && cards.length !== 0) {
    // console.log(cards);
    // if (cards.length === 0) {
    //   return <div>Nothing to Learn! Go back!</div>;
    // }
    let keyset = Object.keys(stats);
    return (
      <Card className={classes.finishCard}>
        <CardContent className={classes.statsContent}>
          Correct Answers: {keyset.reduce((acum, key) => acum + +stats[key], 0)}{" "}
          / {keyset.length}
        </CardContent>
        <CardActions className={classes.finishButton}>
          <Button size="small" color="secondary" component={Link} to="/">
            <DoubleArrow fontSize="small" /> Finish
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <>
      {!todayCardsFetched ? (
        <div
          style={{
            display: "flex",
            // alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <CircularProgress fontSize="large" />
        </div>
      ) : cards.length === 0 || currentCardIndex + 1 > cards.length ? (
        <div>Nothing to Learn! Go back!</div>
      ) : (
        <Grid
          container
          // alignItems="cetner"
          justify="center"
          spacing={3}
          // className={classes.catalog}
        >
          <Grid key={cards[currentCardIndex]._id} item xs={12} sm={12} md={12}>
            <CardItem
              cardData={cards[currentCardIndex]}
              getNextCard={getNextCard}
              setStats={setStats}
            />
          </Grid>

          {/* {cards.map((cardData) => (
            <Grid key={cardData._id} item xs={12} sm={6} md={6}>
              <CardItem cardData={cardData} getNextCard={getNextCard} />
            </Grid>
          ))} */}
        </Grid>
      )}
    </>
  );
};
export default CardsLearn;

// // import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'; // on check in learn (check)
// // import AutorenewIcon from '@material-ui/icons/Autorenew'; // on list of cards (show)
// const CardLearnItem = ({ cardData }) => {
//   const dispatch = useDispatch();
//   //  adding button with check feature
//   // and additional states to calc correct/incorrect answers
//   // subs typograpy (from item/carditemtypes) for answer -> to textfield answer ( or editor) (from form/subform)

//   const [checkResult, setCheckResult] = useState(null);
//   //   const refChecked = useRef(false);
//   const [processing, setProcessing] = useState(false);

//   //   useEffect(() => {
//   //     //   refChecked.current === true &&
//   //     if (checkResult !== false) {
//   //     //   setProcessing(false);
//   //       checkResult()
//   //     }
//   //   }, [checkResult, setProcessing]);

//   //   make array of str for code and theory both (theory.answer.length === 1)
//   //   answer could be an array of str (code) or str (theory)
//   const onCardCheck = async (answer) => {
//     setProcessing(true);
//     const isCorrect = await dispatch(checkCard(cardData._id, answer));
//     setCheckResult(isCorrect);
//     setProcessing(false);
//   };

//   //   //   in child
//   //   if (processing) {
//   //     // loading
//   //     return <CircularProgress />;
//   //   } else if (checkResult !== null) {
//   //     // swipe
//   //     //   return <new component with my answer and actual + result />
//   //   } else {
//   //     //   return <initial component />
//   //   }
//   //   //   checkResult={checkResult} processing={processing} onCardCheck={onCardCheck}

//   return <CardItem cardData={cardData} />;
//   //or add children and unpuck them in child component
// };

// const CardLearnList = () => {
//   //   const classes = useStyles();

//   const dispatch = useDispatch();

//   const cards = useSelector((state) => state.cards.cards);

//   useEffect(() => {
//     dispatch(fetchTodayCards());
//     // }
//   }, [dispatch]);

//   console.log(cards);

//   return (
//     <Grid
//       container
//       spacing={5}
//       alignItems="stretch"
//       //   className={classes.catalog}
//     >
//       {cards?.length === void 0 ? (
//         <CircularProgress />
//       ) : (
//         <CardLearnItem />
//         // <Grid container alignItems="stretch" spacing={3}>
//         //   {cards.map((cardData) => (
//         //     <Grid key={cardData._id} item xs={12} sm={6} md={6}>
//         //       <CardItem cardData={cardData} />
//         //     </Grid>
//         //   ))}
//         // </Grid>
//       )}
//     </Grid>
//   );
// };
// export default CardLearnList;
