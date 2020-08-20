import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  useEffect(() => {
    const M = window.M;
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  });
  return (
    <div>
      <div className="movie-list-menu">
        <a href="#!">
          <h3 data-target="slide-out" className="sidenav-trigger show-on-large">
            Menu
          </h3>
        </a>
      </div>

      <ul id="slide-out" className="sidenav">
        <li className="sidenav-close close-sidenav">
          <i className="material-icons">close</i>
        </li>
        <li className="sidenav-close sidenav-content ">
          <Link to="/">Home Page</Link>
          <Link to="/autocompelete">Auto Compelete</Link>
          <Link to="/carousel">Carousel</Link>
          <Link to="/controlledprogressbar">Controlled Progress Bar</Link>
          <Link to="/SearchMeal">Search Meal</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
