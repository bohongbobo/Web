import React, { useEffect } from "react";
import { loadPageContent, prevPage, nextPage } from "../actions/actions";
import { connect } from "react-redux";
import MovieItems from "./items/MovieItems";
import "./css/movieslist.css";

const MovieList = ({ movies_arr: { allMovie, page }, loadPageContent, prevPage, nextPage }) => {
  console.log(allMovie, "allMovie");
  console.log(page, "page");

  // useEffect(() => {
  //   loadPageContent();
  // }, []);

  useEffect(() => {
    loadPageContent();
  }, [page]);

  return (
    <div>
      <div className="page-control">
        <button class="btn-floating btn-large waves-effect waves-light white" onClick={prevPage}>
          <i class="material-icons black-text">chevron_left</i>
        </button>
        <p className="white-text">{page} / 500</p>
        <button
          className="btn-floating btn-large waves-effect waves-light white"
          onClick={nextPage}
        >
          <i className="material-icons black-text">chevron_right</i>
        </button>
      </div>
      <div className="car-list">
        {allMovie.map((movie) => (
          <MovieItems key={movie.id} allMovie={movie} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies_arr: state.movies_arr,
});

const mapDispatchToProps = {
  loadPageContent,
  prevPage,
  nextPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
