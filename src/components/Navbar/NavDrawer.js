import React, { useState } from "react";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  // MoveToInbox as InboxIcon,
  // Mail as MailIcon,
  Menu as MenuIcon,
} from "@material-ui/icons";
import { useHistory } from "react-router";

import useStyles from "./styles";
import { UserAvatar } from "./Navbar";

const CustomListItem = ({ item, changeLocation }) => {
  const classes = useStyles();
  return (
    <ListItem
      className={classes.heading}
      button
      key={item.text}
      onClick={
        item.operation
          ? () => item.operation()
          : changeLocation(item.redirectLink)
      }
    >
      <ListItemIcon>
        {item.icon}
        {/* TODO here an icon of operation */}
      </ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItem>
  );
};

export default function TemporaryDrawer({ noAuthItems, authItems, user }) {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    // if click or excape key
    setState(open);
  };

  const history = useHistory();

  const changeLocation = (link) => (e) => {
    history.push(link);
  };

  const anchor = "right";

  // if (
  //   !Array.isArray(noAuthItems) ||
  //   !Array.isArray(authItems) ||
  //   authItems.length !== 2 ||
  //   authItems[1].operation === void 0
  // )
  //   return <>Error in nav items</>;
  // console.log(authItems);
  // console.log(noAuthItems);

  return (
    <div className={classes.smToolbar}>
      <UserAvatar user={user} />
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon color="secondary" fontSize="large" />
      </Button>
      <Drawer anchor={anchor} open={state} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          // role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {noAuthItems.map((item) => (
              <CustomListItem
                key={item.text}
                item={item}
                changeLocation={changeLocation}
              />
            ))}
          </List>
          <Divider />
          <List>
            {authItems.map((item) => (
              <CustomListItem
                key={item.text}
                item={item}
                changeLocation={changeLocation}
              />
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
