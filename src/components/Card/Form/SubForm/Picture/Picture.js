import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Grid,
  Paper,
} from "@material-ui/core";
import { Autorenew, CloudUpload, Image } from "@material-ui/icons";
import React, { useEffect } from "react";

import useStyles from "./styles";

const pictureState = {
  picture: {},
  picturePreview: "",
  _type: "picture",
};

const Picture = ({ setCardData, cardData }) => {
  const styles = useStyles();

  useEffect(() => {
    // if cant find apropp field  => will fill with '' => but if has (update session) => nothing to do with it
    for (let key in pictureState) {
      // console.log(cardData);
      if (cardData[key] === void 0) {
        setCardData((prev) => ({ ...prev, [key]: pictureState[key] }));
      }
    }
  }, [cardData, setCardData]);

  return (
    <FormControl className={styles.root}>
      <Paper className={styles.pictureContainer}>
        {!cardData?.picturePreview?.trim() ? (
          <Image className={styles.picture} />
        ) : (
          <img
            src={cardData.picturePreview}
            alt="upload"
            className={styles.picture}
          />
        )}
      </Paper>
      <Button
        variant="contained"
        component="label"
        color="secondary"
        className={styles.button}
      >
        <CloudUpload />
        <input
          type="file"
          onChange={(e) =>
            setCardData({
              ...cardData,
              picture: e.target.files[0],
              picturePreview: URL.createObjectURL(e.target.files[0]),
            })
          }
          hidden
        />
      </Button>
      <FormHelperText>Выберите картинку для запоминания</FormHelperText>
    </FormControl>
  );
};

export default Picture;
