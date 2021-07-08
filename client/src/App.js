import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import TimeAvailability from "./components/TimeAvailability";
import StreamingServices from "./components/StreamingServices";
import ShowGenre from "./components/ShowGenre";
import ResturantZip from "./components/ResturantZip";
import SnacknDrink from "./components/SnacknDrink";
import ShowResults from "./components/ShowResults";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Splash />
        <TimeAvailability />
        <StreamingServices />
        <ShowGenre />
        <ResturantZip />
        <SnacknDrink />
        <ShowResults />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
