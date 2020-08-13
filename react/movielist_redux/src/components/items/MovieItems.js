import React from "react";
import { connect } from "react-redux";
import "../css/movieslist.css";

const MovieItems = ({ allMovie }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  let url = IMG_URL + allMovie.poster_path;
  return (
    <div className="card sticky-action">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={url} alt="Movie Poster" title={allMovie.title} />
      </div>
      <div>
        <div className="card-content">
          <i className="material-icons right activator">more_vert</i>
          <span alt={allMovie.title} title={allMovie.title}>
            <span className="card-title activator ">{allMovie.title}</span>
          </span>
        </div>
        <div className="card-action">
          <a class="btn-floating btn-large waves-effect waves-light black z-depth-5" title="like">
            <i class="material-icons">favorite</i>
          </a>

          <a class="btn-floating btn-large waves-effect waves-light black z-depth-5" title="block">
            <i class="material-icons">block</i>
          </a>
        </div>
      </div>

      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Card Title<i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed once clicked on.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MovieItems);
