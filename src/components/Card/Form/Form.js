import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Select,
  FormHelperText,
  FormControl,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link, useLocation } from "react-router-dom";

// import FileBase from "react-file-base64";

// updateCard
import {
  createCard,
  updateCard,
  fetchSingleCard,
} from "../../../actions/cards";
import useStyles from "./styles";

// import Code from "./SubForm/Code/Code";
// import Picture from "./SubForm/Picture/Picture";
// import Theory from "./SubForm/Theory/Theory";

import { subSpeciesRelation } from "../../../utils/getTypeRelativeComponents";
import { availableTypes } from "../../../utils/availableExtraFieldTypes";
import { ExtraState } from "../../../utils/getTypeRelativeExtraState";

import { streamCardPicSrc } from "../../../api";
import {
  CUFSCode,
  CUFSPicture,
  CUFSTheory,
} from "../ExtraFieldSets/CreateUpdate/CreateUpdate";

const initialState = {
  topic: "",
  theme: "",
  urlSrc: "",
};

// setCardData={setCardData} cardData={cardData} extraState={ExtraState({availableType: type})}
const relativeComponents = [CUFSCode, CUFSPicture, CUFSTheory];

const getRelativeComponent = subSpeciesRelation(relativeComponents);

// after clear do not redirect to main page

const Form = () => {
  const [cardData, setCardData] = useState(initialState);

  const [type, setType] = useState("");

  const refPrevType = useRef("");
  const location = useLocation();
  // устанавливаем текущую локацию последней
  const refPrevLocationPath = useRef(location.pathname);

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const { cardId } = useParams();

  const card = useSelector((state) =>
    cardId ? state.cards.cards.find((a) => a._id === cardId) : null
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    // if update =>  we have cardId => we choose card fields to show
    // if create => it will be free
    // if page was refreshed (all card data was deleted from state ->
    // so we just serach for exact card data) -> card === null -> card = data
    if (cardId && !card) {
      dispatch(fetchSingleCard(cardId));
    } else if (card) {
      let picturePreview = void 0;
      if (card._type === "picture") {
        picturePreview = streamCardPicSrc(card.filename);
      }
      setCardData({ ...card, picturePreview });
    }
  }, [card, cardId, dispatch]);

  useLayoutEffect(() => {
    // we using useLayoutEffect cause it should processed
    // before child component useEffect of population new extra card fields
    if (cardData && type !== refPrevType.current) {
      const defaultCardData = {};
      for (let key in cardData) {
        if (initialState[key] !== void 0) {
          defaultCardData[key] = cardData[key];
        }
      }
      refPrevType.current = type;
      setCardData({ ...defaultCardData });
    }
  }, [type, cardData]);

  useEffect(() => {
    // Если мы меняем страницу с обновить на загрузить
    //  (или наоборот вводя в юрл строку путь или кнопкой навигации по истории страницы),
    // чтобы не оставались данные предидущей страницы - обнуляем стейт сardData
    if (location.pathname !== refPrevLocationPath.current) {
      setCardData(initialState);
    }
  }, [location]);

  const clear = () => {
    // if it has picturePreview clear browser memory
    if (cardData.picturePreview) {
      URL.revokeObjectURL(cardData.picturePreview);
    }
    // even if its a {} not only '' =>  set firstly to ''
    setCardData((prev) =>
      Object.keys(prev).reduce(
        (acum, key) => (
          key === "question" ? (acum[key] = [""]) : (acum[key] = ""), acum
        ),
        {}
      )
    );
    setType("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cardId === void 0) {
      create();
    } else {
      update();
    }
    clear();
  };

  const getJsonData = () => ({
    ...cardData,
    ownerName: user.result.name,
    picture: cardData.picture instanceof File ? cardData.picture : void 0,
    // never send picturePreview to backend
    picturePreview: void 0,
  });
  const getFormData = () => {
    const sendData = getJsonData();
    const newAcumData = new FormData();
    const formData = Object.keys(sendData).reduce(
      (acum, key) => (acum.append(key, sendData[key]), acum),
      newAcumData
    );
    // // Display the key/value pairs
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    return formData;
  };

  // choosing to send multipart/form-data or json (relatively to _type)
  const chooseSendData = () =>
    cardData._type === "picture" && cardData.picture instanceof File
      ? getFormData()
      : getJsonData();

  const update = () => {
    dispatch(updateCard(cardId, chooseSendData(), history));
  };

  const create = () => {
    dispatch(createCard(chooseSendData(), history));
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own learn cards.
        </Typography>
      </Paper>
    );
  }

  return (
    <Grid container spacing={5} alignItems="stretch">
      {!cardId && (
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <FormControl required className={classes.formControl}>
              <InputLabel>Тип</InputLabel>
              <Select value={type} onChange={handleChangeType}>
                <MenuItem value="">
                  <em>none</em>
                </MenuItem>
                {availableTypes.map((at) => (
                  <MenuItem key={at} value={at}>
                    {at}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                Выберите тип карточки для запоминания
              </FormHelperText>
            </FormControl>
          </Paper>
        </Grid>
      )}
      <Grid item xs={12} sm={12}>
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography variant="h6" className={classes.heading}>
              {cardId ? (
                <>
                  <p>Изменение карточки по теме: &nbsp;</p>
                  <i className={classes.cardThemeHeading}>
                    {card?.theme} &nbsp;
                  </i>
                </>
              ) : (
                "Создание карточки"
              )}
            </Typography>
            <TextField
              name="topic"
              variant="outlined"
              label="topic"
              fullWidth
              value={cardData.topic}
              className={classes.regularField}
              onChange={(e) =>
                setCardData({ ...cardData, topic: e.target.value })
              }
            />
            <TextField
              name="theme"
              variant="outlined"
              label="theme"
              fullWidth
              multiline
              rows={4}
              value={cardData.theme}
              className={classes.regularField}
              onChange={(e) =>
                setCardData({ ...cardData, theme: e.target.value })
              }
            />
            <TextField
              name="urlSrc"
              variant="outlined"
              label="urlSrc"
              fullWidth
              value={cardData.urlSrc}
              className={classes.regularField}
              onChange={(e) =>
                setCardData({ ...cardData, urlSrc: e.target.value })
              }
            />
            <Grid container>
              <Grid item xs={12} sm={12}>
                {type || cardData._type ? (
                  <Typography variant="h6" className={classes.extraFields}>
                    {`Spec fields for the ${type || cardData._type} type card`}
                  </Typography>
                ) : null}
              </Grid>

              <Grid
                xs={12}
                sm={12}
                item
                container
                // fix padding for theory fieldSet // and reduce width of code fieldSet with left offset to make it center
                style={{
                  paddingRight: "16px",
                  position: "relative",
                  left:
                    type === "code" || cardData._type === "code" ? `8px` : 0,
                }}
              >
                {getRelativeComponent(type || cardData._type, {
                  setCardData,
                  cardData,
                  extraState: ExtraState({
                    availableType: type || cardData._type,
                  }),
                })}
              </Grid>
            </Grid>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
            {cardId && card ? (
              <Button
                component={Link}
                variant="contained"
                color="secondary"
                size="small"
                to="/"
                onClick={clear}
                fullWidth
              >
                Cancel
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={clear}
                fullWidth
              >
                Clear
              </Button>
            )}
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Form;
// update -  create
