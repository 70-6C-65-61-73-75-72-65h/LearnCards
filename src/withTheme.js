import React, { useState } from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { Brightness4, Brightness5 } from "@material-ui/icons";

import AppTheme from "./AppTheme";

const withThemes = (WrappedComponent) => ({ ...props }) => {
  const [theme, setTheme] = useState(true); // dark by default

  const icon = theme ? (
    <Brightness4 onClick={() => setTheme((prev) => !prev)} />
  ) : (
    <Brightness5 onClick={() => setTheme((prev) => !prev)} />
  );
  const appliedTheme = createMuiTheme(theme ? AppTheme.light : AppTheme.dark);
  return <WrappedComponent Icon={icon} theme={appliedTheme} {...props} />;
};

export default withThemes;
