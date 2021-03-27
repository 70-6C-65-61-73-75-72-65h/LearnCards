import { CardMedia, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import React, { useState } from "react";
import { streamCardPicSrc } from "../../../../api";

import { scrollStyleMixin } from "../../../../mixins/styles";

import useStyles from "./styles";

const useExtraStyles = makeStyles((theme) => ({
  container: {
    ...scrollStyleMixin(theme),
    "& div:nth-child(1)": {
      display: "none",
    },
  },
}));

// cardUrl - for show learn PictureReadField
export const PictureReadField = ({ cardData, learn }) => {
  const classes = useStyles();
  const dialogClasses = useExtraStyles();

  const [open, setOpen] = useState(false);
  const [Im, setIm] = useState({ imgW: 0, imgH: 0 });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (!open) {
    return (
      <>
        <CardMedia
          className={classes[`readPicture${learn ? "ShowLearn" : ""}`]}
          image={streamCardPicSrc(cardData?.filename)}
          title={cardData?.theme}
          onClick={handleOpen}
        />
        {/* image only for uploading of image to get its naturalWidth and naturalHeight to set it in reveal full-size container */}
        <img
          src={streamCardPicSrc(cardData?.filename)}
          ref={(input) => {
            // onLoad replacement for SSR
            if (!input) {
              return;
            }
            const img = input;
            const updateFunc = () => {
              setIm({ imgW: img.naturalWidth, imgH: img.naturalHeight });
            };
            img.onload = updateFunc;
          }}
          style={{ display: "none" }}
          alt="no img"
        />
      </>
    );
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{
        display:
          window.innerWidth > Im.imgW || window.innerHeight > Im.imgH
            ? "flex"
            : "block !important",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={dialogClasses.container}
    >
      <div
        onClick={handleClose}
        style={{
          // backgroundClip: "border-box",
          backgroundImage: `url(${streamCardPicSrc(cardData?.filename)})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: `${Im.imgW}px`,
          // height: `100%`,
          height: `${Im.imgH}px`,
        }}
      ></div>
    </Modal>
  );
};
