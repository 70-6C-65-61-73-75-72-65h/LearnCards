import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Tooltip,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import moment from "moment";

import { Link } from "react-router-dom";

import { deleteCard, checkCard } from "../../../../actions/cards";
import useStyles from "./styles";

import AutorenewIcon from "@material-ui/icons/Autorenew";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const DeleteButton = ({ dispatch, cardData, learn }) => (
  <Button
    size="small"
    color="secondary"
    onClick={() => dispatch(deleteCard(cardData._id))}
    disabled={learn}
  >
    <DeleteIcon fontSize="small" /> Delete
  </Button>
);

export const CardWithoutMainContent = ({
  cardData,
  callMethod,
  flipped,
  learn,
  children,
}) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card
      className={`${flipped ? classes.cardBack : classes.cardFront} ${
        learn ? classes.cardLearn : ""
      }`}
    >
      <Grid container item className={classes.cardHeader}>
        <div className={classes.timeAuthor}>
          {/*  variant="caption"  */}
          <Typography component="h3">{cardData.ownerName}</Typography>

          <Typography variant="body2">
            {moment(cardData.createdAt).fromNow()}
          </Typography>
        </div>

        {!learn && user?.result?._id === cardData?.ownerId && (
          <div className={classes.update}>
            <Button
              component={Link}
              to={`/card/update/${cardData._id}`}
              color="secondary"
              size="small"
              disabled={learn}
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
        )}
      </Grid>

      <CardContent className={classes.content}>{children}</CardContent>

      <Grid className={classes.topicType}>
        <Typography
          className={classes.topic}
          // variant="h5"
          component="h5"
        >
          {/*  variant="caption"  */}
          <Typography className={classes.caption}>Topic:</Typography>
          <Typography className={classes.cardThemeHeading}>
            &nbsp;{cardData.topic}
          </Typography>
        </Typography>
        <div
          className={`${classes.cardType} ${
            cardData._type === "code" ? "code" : ""
          }`}
        >
          {/*  variant="caption"  */}
          <Typography className={classes.caption}>Type:</Typography>
          <Typography className={classes.cardThemeHeading}>
            &nbsp;{cardData._type}
          </Typography>
        </div>
      </Grid>

      <Typography
        className={classes.title}
        gutterBottom
        // variant="h5"
        // component="h2"
      >
        <Typography className={classes.caption}>Theme:</Typography>
        <Typography className={classes.cardThemeHeading}>
          &nbsp;{cardData.theme}
        </Typography>
      </Typography>

      <Typography
        component="a"
        className={classes.urlSrc}
        href={cardData.urlSrc}
        rel="noreferrer"
        target="_blank"
      >
        Source
      </Typography>
      {/* user?.result?.googleId === cardData?.ownerId || */}
      <CardActions className={classes.cardActions}>
        {user?.result?._id === cardData?.ownerId &&
          (learn ? (
            <Tooltip
              title="You cant delete card if you learn it now"
              placement="right-start"
            >
              <div>
                <DeleteButton {...{ dispatch, cardData, learn }} />
              </div>
            </Tooltip>
          ) : (
            <DeleteButton {...{ dispatch, cardData, learn }} />
          ))}
        {!(learn && flipped) ? (
          <Button
            size="small"
            color="secondary"
            // component={Link}
            // to={`/card/update/${cardData._id}`}
            onClick={callMethod}
          >
            <AutorenewIcon fontSize="small" />{" "}
            {flipped ? "Back" : learn ? "Check" : "Show"}
          </Button>
        ) : (
          <Button
            size="small"
            color="secondary"
            // component={Link}
            // to={`/card/update/${cardData._id}`}
            onClick={callMethod}
          >
            <DoubleArrowIcon fontSize="small" /> Next
          </Button>
        )}
        {/* AutorenewIcon */}
      </CardActions>
    </Card>
  );
};

// так как тут не для create-update -> то не setCardData и userAnswer,  а setUA и userAnswer
export const CardRevealedConcealed = ({
  cardData,
  // setUA, // optional (for write fields only)
  // userAnswer, // optional (for learn fields only)
  learn,
  callMethod,
  flipped,
  realtiveFieldSet,
}) => {
  return (
    <CardWithoutMainContent {...{ cardData, callMethod, flipped, learn }}>
      {realtiveFieldSet}
    </CardWithoutMainContent>
  );
};
// const CardConcealed = ({ cardData, flip, flipped, realtiveFieldSet }) => {
//   return (
//     <CardWithoutMainContent {...{ cardData, flip, flipped }}>
//       {realtiveFieldSet(cardData._type, { cardData: cardData })}
//     </CardWithoutMainContent>
//   );
// };

// just subs flip and flipped on check - checked
// const CardItem = ({ cardData }) => {
//   const classes = useStyles();
//   const [flipped, setFlipped] = useState(false);

//   const flip = () => {
//     setFlipped((prev) => !prev);
//   };

//   return (
//     <div className={`${classes.card} ${flipped ? classes.cardShow : ""}`}>
//       {flipped ? (
//         <CardRevealedConcealed
//           {...{
//             cardData,
//             flip,
//             flipped,
//             realtiveFieldSet: getRelativeComponentShow,
//           }}
//         />
//       ) : (
//         <CardRevealedConcealed
//           {...{
//             cardData,
//             flip,
//             flipped,
//             realtiveFieldSet: getRelativeComponent,
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default CardItem;

//  Check or Show
//  dispatch(checkCard(cardData._id)) or
