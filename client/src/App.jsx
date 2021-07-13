import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Splash from "./components/Splash.jsx";
import FlixsNFair from "./components/FlixsNFair";
import Snackbar from "./components/Snackbar.jsx";


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route component={SignIn} path="/" exact />
        <Route component={SignUp} path="/signup" exact />
        <Route component={Splash} path="/home" />
        <Route component={FlixsNFair} path="/FlixsNFair" />
        <Route component={Snackbar} path="/snackbar" />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
