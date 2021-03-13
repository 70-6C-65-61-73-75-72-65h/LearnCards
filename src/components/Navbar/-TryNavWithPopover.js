import React, { useState, useEffect, useRef } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";

import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import learnPic from "../../images/learn2.png";
import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";

import { Popover, useMediaQuery, withWidth } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const widthPopver = 400;
const heightPopver = 250;

const kkkk = makeStyles((theme) => ({
  root: {
    width: `${widthPopver}px`,
    height: `${heightPopver}px`,
  },
}));

const withMediaQuery = (WrappedComponent) => ({ ...props }) => {
  const kkkkclass = kkkk();

  const { innerHeight, innerWidth } = window;
  console.log(innerHeight);
  console.log(innerWidth);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorPosition, setAnchorPosition] = React.useState(null);

  const handleClick = (event) => {
    setAnchorPosition(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorPosition(null);
  };

  const open = Boolean(anchorPosition);
  const id = open ? "simple-popover" : undefined;
  if (matches) {
    return (
      <>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Open Popover
        </Button>
        <Popover
          // ref={selfSizes.current}
          className={kkkkclass.root}
          id={id}
          anchorReference="anchorPosition"
          anchorPosition={{
            top: (innerHeight - heightPopver) / 2,
            left: (innerWidth - widthPopver) / 2,
          }}
          open={open}
          onClose={handleClose}
        >
          <WrappedComponent {...props} />
        </Popover>
      </>
    );
  }

  return <WrappedComponent {...props} />;
};

const NavbarContent = ({ icon }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      <Typography
        component={Link}
        to="/"
        className={classes.heading}
        variant="h5"
        align="center"
      >
        Карточки
      </Typography>
      <Typography
        component={Link}
        to="/card/create"
        className={classes.heading}
        variant="h5"
        align="center"
      >
        Загрузить Карточку
      </Typography>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              // className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Выйти
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Войти
          </Button>
        )}
      </Toolbar>
    </>
  );
};

const AdaptiveNavbarContent = withMediaQuery(NavbarContent);

const Navbar = ({ icon }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <div className={classes.brandContainer}>
        <img className={classes.image} src={learnPic} alt="icon" />
        {icon}
      </div>
      <AdaptiveNavbarContent icon={icon} />
    </AppBar>
  );
};

export default Navbar;

//  change popover to modal https://material-ui.com/components/modal/
