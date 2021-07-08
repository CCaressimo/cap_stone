import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import Splash from "./components/Splash";
import SelectMovieOrShow from "./components/SelectMovieOrShow";
import StreamingServices from "./components/StreamingServices";
import ShowGenre from "./components/ShowGenre";
import EntertainmentChoices from "./components/EntertainmentChoices";
import Snackbar from "./components/Snackbar";
import DeliveryOptions from "./components/DeliveryOptions";
import StreamingLinks from "./components/StreamingLinks";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <SignIn />
        <Splash />
        <SelectMovieOrShow />
        <StreamingServices />
        <ShowGenre />
        <EntertainmentChoices />
        <Snackbar />
        <DeliveryOptions />
        <StreamingLinks />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
