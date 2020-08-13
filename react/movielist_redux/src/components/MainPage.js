import React from "react";
import SideNav from "./SideNav";
import HomePage from "./HomePage";
import MovieList from "./MovieList";
import LikedMovies from "./LikedMovies";
import BlockedMovies from "./BlockedMovies";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MoviesList = () => {
  return (
    <Router>
      <SideNav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movielist">
          <MovieList />
        </Route>
        <Route path="/likedmovies">
          <LikedMovies />
        </Route>
        <Route path="/blockedmovies">
          <BlockedMovies />
        </Route>
      </Switch>
    </Router>
  );
};

export default MoviesList;
