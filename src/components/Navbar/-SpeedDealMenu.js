import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Radio,
  RadioGroup,
  Switch,
  FormControlLabel,
  FormLabel,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import {
  FileCopyOutlined as FileCopyIcon,
  Save as SaveIcon,
  Print as PrintIcon,
  Share as ShareIcon,
  Favorite as FavoriteIcon,
} from "@material-ui/icons";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     // position: "absolute",
  //     transform: "translateZ(0px)",
  //     flexGrow: 1,
  //   },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },

  exampleWrapper: {
    // display: "flex",
    // flexGrow: 1,
    position: "relative",
    // marginTop: theme.spacing(3),
    height: "10px",
    width: "10px",
  },
  //   radioGroup: {
  //     margin: theme.spacing(1, 0),
  //   },
  speedDial: {
    position: "absolute",
    // "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    //   bottom: theme.spacing(2),
    //   right: theme.spacing(2),
    // },
    // "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    //   top: theme.spacing(2),
    //   left: theme.spacing(2),
    // },
    "&.MuiSpeedDial-directionDown": {
      top: -theme.spacing(2.5),
      right: theme.spacing(2.5),
    },
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
  { icon: <FavoriteIcon />, name: "Like" },
];

export default function SpeedDials() {
  const classes = useStyles();
  const direction = "down";
  const [open, setOpen] = useState(false);
  const handleOpenToggle = () => {
    setOpen(!open);
  };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  return (
    <div className={classes.exampleWrapper}>
      {/* <Backdrop open={open} className={classes.backdrop}> */}
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        //   hidden={hidden}
        icon={open ? <SpeedDialIcon /> : <CircularProgress />}
        // onClose={handleClose}
        // onOpen={handleOpen}
        onClick={handleOpenToggle}
        open={open}
        direction={direction}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleOpenToggle}
          />
        ))}
      </SpeedDial>
      {/* </Backdrop> */}
    </div>
  );
}
