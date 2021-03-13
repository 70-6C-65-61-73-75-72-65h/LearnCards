import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
  useRef,
} from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  CircularProgress,
  Tab,
  Tabs,
  Paper,
} from "@material-ui/core";

import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import learnPic from "../../images/learn2.png";
import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";

import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import NavDrawer from "./NavDrawer";
import apiNC from "../../utils/getNavbarConstants";

// null -> CP / false => большой экран / true => маленький экран
const withMediaQuery = (WrappedComponent) => ({ ...props }) => {
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("sm"));
  const [matches, setMatches] = useState(void 0);
  useEffect(() => {
    if (matches === void 0) {
      // that means useEffect dont run before -> its 1-st render
      //  (media dont performed properly yet before 1 render so we cant render component yet)
      setMatches(null);
    } else if (media !== matches) {
      setMatches(media);
    }
  }, [setMatches, matches, media]);

  if (matches === void 0 || matches === null) {
    return <CircularProgress />;
  } else if (matches === true) {
    return <NavDrawer {...props} />;
  } else if (matches === false) {
    return <WrappedComponent {...props} />;
  }
};

export const UserAvatar = ({ user }) => {
  const classes = useStyles();

  return (
    <Avatar
      className={classes.avatar}
      alt={user?.result.name}
      src={user?.result.imageUrl}
    >
      {user?.result.name.charAt(0)}
    </Avatar>
  );
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const NavigationTextItem = ({ item, ...props }) => {
  const classes = useStyles();
  return (
    <Tab
      component={Link}
      to={item.redirectLink}
      className={classes.tabs}
      variant="h5"
      align="center"
      label={item.text}
      {...props}
    />
  );
};

// authItems.length === 2 (0 - signin, 1- siginout)
const NavbarContent = ({ user, noAuthItems, authItems }) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (
    !Array.isArray(noAuthItems) ||
    !Array.isArray(authItems) ||
    authItems.length !== 2 ||
    authItems[1].operation === void 0
    // !noAuthItems.every((i) => i instanceof apiNC) ||
    // !authItems.every((i) => i instanceof apiNC)
  )
    return <>Error in nav items</>;

  return (
    <>
      {/* <Paper className={classes.tabsRootWrapper}> */}
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        // centered
        className={classes.tabsRoot}
      >
        {noAuthItems.map((nti, index) => (
          <NavigationTextItem key={nti.text} item={nti} {...a11yProps(index)} />
        ))}
      </Tabs>
      {/* </Paper> */}

      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <>
            <div className={classes.profile}>
              <UserAvatar user={user} />
              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography>
            </div>
            <Button
              variant="contained"
              // className={classes.logout}
              color="secondary"
              onClick={authItems[1].operation}
            >
              Выйти
            </Button>
          </>
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
  const smIconSize = "Large";
  const smIconColor = "Secondary";
  const smIcon = `${smIconSize}$${smIconColor}`;
  // const theme = useTheme();

  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = useCallback(() => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/auth");
    setUser(null);
    //  we dont need to change logout if history was changed (but nothin special wouldnt happen)
  }, [dispatch, setUser, history]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const [noAuthItems] = useState([
    apiNC[`list$${smIcon}`](),
    apiNC[`create$${smIcon}`](),
    apiNC[`learn$${smIcon}`](),
    // apiNC.list$Large(),
    // apiNC.create$Large(),
    // apiNC.learn$Large(),
  ]);
  const [authItems] = useState([
    apiNC[`signin$${smIcon}`](),
    apiNC[`signout$${smIcon}`]({
      operation: logout,
    }),
    // apiNC.signin$Large({ color: "secondary" }),
    // apiNC.signout$Large({ operation: logout }),
  ]);

  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <div className={classes.brandContainer}>
        <img className={classes.image} src={learnPic} alt="icon" />
        {icon}
      </div>
      <AdaptiveNavbarContent
        user={user}
        noAuthItems={noAuthItems}
        authItems={authItems}
      />
    </AppBar>
  );
};

export default Navbar;

//  change popover to modal https://material-ui.com/components/modal/
