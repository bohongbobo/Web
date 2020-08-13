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
            Movies List Menu
          </h3>
        </a>
      </div>

      <ul id="slide-out" className="sidenav">
        <li className="sidenav-close close-sidenav">
          <i className="material-icons">close</i>
        </li>
        <li className="sidenav-close sidenav-content ">
          <Link to="/">Home Page</Link>
          <Link to="/movielist">Moives</Link>
          <Link to="/likedmovies">Liked Movies</Link>
          <Link to="/blockedmovies">Blocked Movies</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
