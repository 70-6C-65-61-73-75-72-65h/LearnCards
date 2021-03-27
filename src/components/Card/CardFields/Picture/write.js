import {
  Button,
  FormControl,
  FormHelperText,
  Paper,
  Grid,
} from "@material-ui/core";
import { CloudUpload, Image } from "@material-ui/icons";
import React from "react";

import useStyles from "./styles";

export const PictureWriteField = ({ setCardData, cardData }) => {
  const styles = useStyles();

  console.log(cardData);
  return (
    <Grid xs={12} sm={12} item>
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
    </Grid>
  );
};
