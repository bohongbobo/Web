/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import "./Lists.css";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  state = {
    title: false,
    release_date: false,
    vote_count: false,
    vote_Average: false,
  };

  handleClickTitle = () => {
    const { title } = this.state;
    const dir = title === true ? "asc" : "desc";
    const sortType = "original_title";
    this.setState({
      title: !title,
    });
    this.props.sortByType(sortType, dir);
  };
  handleClickDate = () => {
    const { release_date } = this.state;
    const dir = release_date === true ? "asc" : "desc";
    const sortType = "primary_release_date";
    this.setState({
      release_date: !release_date,
    });
    this.props.sortByType(sortType, dir);
  };
  handleClickVoteCount = () => {
    const { vote_count } = this.state;
    const dir = vote_count === true ? "asc" : "desc";
    const sortType = "vote_count";
    this.setState({
      vote_count: !vote_count,
    });
    this.props.sortByType(sortType, dir);
  };
  handleClickVoteAve = () => {
    const { vote_Average } = this.state;
    const dir = vote_Average === true ? "asc" : "desc";
    const sortType = "vote_Average";
    this.setState({
      vote_Average: !vote_Average,
    });
    this.props.sortByType(sortType, dir);
  };

  render() {
    const { page, pageMovie } = this.props;
    const { title, release_date, vote_count, vote_Average } = this.state;
    // const { allMovie, likedMovies, blockedMovies, sortByType } = this.props;
    // console.log("Page", page, pageMovie);
    // console.log("allMovie:  ", allMovie);
    // console.log("Liked:  ", likedMovies);
    // console.log("blocked:  ", blockedMovies);
    return (
      <div className="container">
        <div className="searchContainer">
          {title ? (
            <a className="waves-effect waves-light btn" onClick={() => this.handleClickTitle()}>
              Title <i className="material-icons right"> arrow_downward </i>{" "}
            </a>
          ) : (
            <a className="waves-effect waves-light btn" onClick={() => this.handleClickTitle()}>
              Title <i className="material-icons right"> arrow_upward </i>{" "}
            </a>
          )}
          {release_date ? (
            <a className="waves-effect waves-light btn" onClick={() => this.handleClickDate()}>
              Release Date <i className="material-icons right"> arrow_downward </i>{" "}
            </a>
          ) : (
            <a className="waves-effect waves-light btn" onClick={() => this.handleClickDate()}>
              Release Date <i className="material-icons right"> arrow_upward </i>{" "}
            </a>
          )}
          {vote_count ? (
            <a className="waves-effect waves-light btn" onClick={() => this.handleClickVoteCount()}>
              vote_count <i className="material-icons right"> arrow_downward </i>{" "}
            </a>
          ) : (
            <a className="waves-effect waves-light btn" onClick={() => this.handleClickVoteCount()}>
              vote_count <i className="material-icons right"> arrow_upward </i>{" "}
            </a>
          )}
          {vote_Average ? (
            <a className="waves-effect waves-light btn" onClick={() => this.handleClickVoteAve()}>
              vote_average <i className="material-icons right"> arrow_downward </i>{" "}
            </a>
          ) : (
            <a className="waves-effect waves-light btn" onClick={() => this.handleClickVoteAve()}>
              vote_average <i className="material-icons right"> arrow_upward </i>{" "}
            </a>
          )}
        </div>{" "}
        <hr />
        <div id="pageBar">
          <a
            className="btn-floating btn-large waves-effect waves-light "
            onClick={this.props.goPre}
          >
            &lt;
          </a>
          <h6>{"Page " + page + "/500"}</h6>
          <a
            className="btn-floating btn-large waves-effect waves-light "
            onClick={this.props.goNext}
          >
            &gt;
          </a>
        </div>{" "}
        <hr />
        <div className="movieList">
          {pageMovie.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              clickBlockBtn={this.props.clickBlockBtn}
              clickLikeBtn={this.props.clickLikeBtn}
            />
          ))}
        </div>
      </div>
    );
  }
}
