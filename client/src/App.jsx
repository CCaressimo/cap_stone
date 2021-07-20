import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Splash from "./components/Splash.jsx";
import FlixNFair from "./components/FlixNFair";
import Credits from "./components/Credits.jsx";

const App = () => {

  return (


    <BrowserRouter>
      <Switch>
        <Route component={SignIn} path="/" exact />
        <Route component={SignUp} path="/signup" exact />
        <Route component={Splash} path="/home" exact />
        <Route component={FlixNFair} path="/FlixNFair" exact />
        <Route component={Credits} path="/credits" exact />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
