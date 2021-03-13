import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

// import Home from "./components/Home/Home";
import Cards from "./components/Card/List/CardList";
// import UploadMusic from "./components/Music/Upload/UploadMusic";
import Form from "./components/Card/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";

import withTheme from "./withTheme";

const App = ({ Icon, theme }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Navbar icon={Icon} />
          <Switch>
            <Route path={["/", "/cards"]} exact component={Cards} />
            <Route
              path={["/card/create", "/card/update/:cardId"]}
              exact
              component={Form}
            />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default withTheme(App);
