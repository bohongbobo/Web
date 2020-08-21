import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./componments/ManPage";
import AutoCompelete from "./componments/autocompelete/AutoCompelete";
import Carousel from "./componments/carousel/Carousel";
import ControlledProgressBar from "./componments/progressbar/ControlledProgressBar";
import SearchMeal from "./componments/searchmeal/SearchMeal";

function App() {
  return (
    <div className="App">
      <Router>
        <MainPage />
        <Switch>
          <Route exact path="/autocompelete">
            <AutoCompelete />
          </Route>
          <Route exact path="/carousel">
            <Carousel />
          </Route>
          <Route exact path="/controlledprogressbar">
            <ControlledProgressBar />
          </Route>
          <Route exact path="/SearchMeal">
            <SearchMeal />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
