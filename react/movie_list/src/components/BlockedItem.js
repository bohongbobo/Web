import React, { Fragment } from "react";
import "./MovieItem.css";
import "./BlockItem.css";

export default function BlockedItem(props) {
  const { movie, clickFav, clickBlockDelete } = props;
  const url = "https://image.tmdb.org/t/p/w500";

  return (
    <Fragment>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={url + movie.picture} />{" "}
        </div>{" "}
        <div className="card-content block-card">
          <div onClick={() => clickBlockDelete(movie.id)}>
            <i className="material-icons"> delete_sweep </i>{" "}
          </div>{" "}
          <div onClick={() => clickFav(movie.id)}>
            <i className="material-icons"> favorite_border </i>{" "}
          </div>{" "}
          <i className="material-icons activator"> more_vert </i>{" "}
        </div>{" "}
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{movie.title}</span>
          <p>{movie.description}</p>
        </div>
      </div>
    </Fragment>
  );
}
