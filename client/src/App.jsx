import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

// import SignIn from "./components/SignIn.jsx";
// import SignUp from "./components/SignUp.jsx";
import Splash from "./components/Splash.jsx";
import FlixNFair from "./components/FlixNFair";

const App = () => {

  return (


    <BrowserRouter>
      <Switch>
        {/* <Route component={SignUp} path="/" exact />
        <Route component={SignIn} path="/signin" exact /> */}
        <Route component={Splash} path="/" exact />
        <Route component={FlixNFair} path="/FlixNFair" />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
