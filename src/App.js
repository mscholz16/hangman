import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Game from "./pages/Game";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Game}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
