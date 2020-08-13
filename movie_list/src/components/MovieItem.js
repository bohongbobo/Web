import React, { Fragment } from "react";
import "./MovieItem.css";

export default function MovieItem(props) {
  const { movie, clickLikeBtn, clickBlockBtn } = props;
  const url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={url + movie.picture} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {movie.title}
          <i id="more_vert" className="material-icons right">
            more_vert
          </i>
        </span>
        <div className="itemBtn">
          {movie.isLike === true ? (
            <a
              className="waves-effect waves-light btn-small"
              onClick={(id) => clickLikeBtn(movie.id)}
            >
              <i className="material-icons left">favorite</i>
              liked
            </a>
          ) : (
            <a
              className="waves-effect waves-light btn-small"
              onClick={() => clickLikeBtn(movie.id)}
            >
              <i className="material-icons left">favorite_border</i>
              like
            </a>
          )}
          <a className="waves-effect waves-light btn-small" onClick={() => clickBlockBtn(movie.id)}>
            <i className="material-icons left">block</i>block
          </a>
        </div>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{movie.title}</span>
        <p>{movie.description}</p>
      </div>
    </div>
  );
}
