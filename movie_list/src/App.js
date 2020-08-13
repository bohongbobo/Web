import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieList from "./components/MovieList";
import SideBarMenu from "./components/SideBarMenu";
import LikeList from "./components/LikeList";
import BlockList from "./components/BlockList";
import LoadingSpinner from "./components/LoadingSpinner";

class App extends Component {
  state = {
    visible: false,
    loading: true,
    likedMovies: [],
    blockedMovies: [],
    allMovie: [],
    page: 1,
    pageList: [],
    pageMovie: [],
    sortBy: "primary_release_date",
    order: "desc",
  };

  handleHomeClick(e) {
    e.preventDefault();
    this.setState({
      visible: !this.state.visible,
    });
  }

  clickLikeBtn = (id) => {
    const newList = this.state.allMovie;

    newList.map((item) => {
      if (item.id === id) {
        item.isLike = !item.isLike;
        item.isBlock = false;
      }
      // return item;
    });

    this.setState({
      allMovie: newList,
      likedMovies: newList.filter((item) => item.isLike === true),
      blockedMovies: newList.filter((item) => item.isBlock === true),
    });
  };

  clickBlockBtn = (id) => {
    const { allMovie, pageMovie } = this.state;

    allMovie.filter((item) => {
      if (item.id === id) {
        item.isBlock = !item.isBlock;
        item.isLike = false;
        return item;
      }
    });
    console.log("111111");

    this.setState({
      allMovie: allMovie,
      pageMovie: pageMovie.filter((item) => item.isBlock === false),
      likedMovies: allMovie.filter((item) => item.isLike === true),
      blockedMovies: allMovie.filter((item) => item.isBlock === true),
    });
  };

  clickFav = (id) => {
    const { allMovie, pageMovie, likedMovies } = this.state;

    const likedItem = allMovie.filter((item) => {
      if (item.id === id) {
        item.isLike = !item.isLike;
        item.isBlock = false;
        return item;
      }
    });

    this.setState({
      allMovie: allMovie,
      pageMovie: [...pageMovie, ...likedItem],
      likedMovies: [...likedMovies, ...likedItem],
      blockedMovies: allMovie.filter((item) => item.isBlock === true),
    });
  };

  clickBlockDelete = (id) => {
    const { allMovie, pageMovie } = this.state;

    const blockedItem = allMovie.filter((item) => {
      if (item.id === id) {
        item.isBlock = !item.isBlock;
        item.isLike = false;
        return item;
      }
    });
    this.setState({
      allMovie: allMovie,
      pageMovie: [...pageMovie, ...blockedItem],
      blockedMovies: allMovie.filter((item) => item.isBlock === true),
    });
  };

  componentDidMount = () => {
    this.loadPageContent();
  };

  loadPageContent = () => {
    const { page, pageList, allMovie, sortBy, order } = this.state;

    if (pageList.includes(page)) {
      // console.log("这里是if， allmovie shi", allMovie);
      this.setState({
        pageMovie: allMovie.slice((page - 1) * 10, 20 * page - 1),
      });
    } else {
      this.setState({ loading: true }, () => {
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=87dabc6e2725920a54ec3b03e8f64cc8&language=en-US&sort_by=${sortBy}.${order}&include_adult=false&include_video=false&page=${page} `
        )
          .then((res) => res.json())
          .then((data) => {
            const list = this.createItems(data.results);
            this.setState({
              loading: false,
              pageList: [...pageList, page],
              pageMovie: [...list],
              allMovie: [...allMovie, ...list],
            });
          });
      });
    }
  };

  createItems = (list) => {
    let result = list.map((item) => {
      return {
        id: item.id,
        title: item.original_title,
        picture: item.poster_path,
        isLike: false,
        isBlock: false,
        releaseDate: item.release_date,
        voteCount: item.vote_count,
        voteAve: item.vote_average,
        description: item.overview,
      };
    });
    return result;
  };

  goPre = () => {
    const { page } = this.state;
    this.setState(
      {
        page: page === 1 ? 500 : page - 1,
      },
      () => {
        this.loadPageContent();
      }
    );
  };
  goNext = () => {
    const { page } = this.state;
    this.setState(
      {
        page: page === 500 ? 1 : page + 1,
      },
      () => {
        this.loadPageContent();
      }
    );
  };
  sortByType = (sortType, dir) => {
    console.log("111111", sortType, dir);
    switch (sortType) {
      case "original_title":
        this.setState(
          {
            likedMovies: [],
            blockedMovies: [],
            allMovie: [],
            page: 1,
            pageList: [],
            pageMovie: [],
            sortBy: "original_title",
            order: dir,
          },
          () => {
            this.loadPageContent();
          }
        );
        break;
      case "primary_release_date":
        this.setState(
          {
            likedMovies: [],
            blockedMovies: [],
            allMovie: [],
            page: 1,
            pageList: [],
            pageMovie: [],
            sortBy: "primary_release_date",
            order: dir,
          },
          () => {
            this.loadPageContent();
          }
        );
        break;
      case "vote_count":
        this.setState(
          {
            likedMovies: [],
            blockedMovies: [],
            allMovie: [],
            page: 1,
            pageList: [],
            pageMovie: [],
            sortBy: "vote_count",
            order: dir,
          },
          () => {
            this.loadPageContent();
          }
        );
        break;
      case "vote_average":
        this.setState(
          {
            likedMovies: [],
            blockedMovies: [],
            allMovie: [],
            page: 1,
            pageList: [],
            pageMovie: [],
            sortBy: "vote_average",
            order: dir,
          },
          () => {
            this.loadPageContent();
          }
        );
        break;
      default:
        this.setState(
          {
            likedMovies: [],
            blockedMovies: [],
            allMovie: [],
            page: 1,
            pageList: [],
            pageMovie: [],
            sortBy: "popularity",
            order: dir,
          },
          () => {
            this.loadPageContent();
          }
        );
    }
  };

  render() {
    const {
      loading,
      page,
      pageMovie,
      allMovie,
      likedMovies,
      blockedMovies,
      sortBy,
      order,
    } = this.state;
    console.log("page movie", pageMovie);
    return (
      <React.Fragment>
        <Router>
          <div className="goTop">
            <a href="#top">
              <i className="medium material-icons white-text waves-effect waves-light">
                arrow_upward
              </i>
            </a>
          </div>

          <SideBarMenu
            visible={this.state.visible}
            handleHomeClick={(e) => this.handleHomeClick(e)}
          />

          <div className="container" id="top">
            <div className="card-panel light-blue lighten-3 center">
              <h3 id="title" onClick={(e) => this.handleHomeClick(e)}>
                Movies List Menu
              </h3>
              <br />
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/movieslist">
                  {loading ? (
                    <LoadingSpinner />
                  ) : (
                    <MovieList
                      sortBy={sortBy}
                      order={order}
                      page={page}
                      pageMovie={pageMovie}
                      allMovie={allMovie}
                      likedMovies={likedMovies}
                      blockedMovies={blockedMovies}
                      clickBlockBtn={this.clickBlockBtn}
                      clickLikeBtn={this.clickLikeBtn}
                      sortByType={(sortType, order) => this.sortByType(sortType, order)}
                      goPre={this.goPre}
                      goNext={this.goNext}
                    />
                  )}
                </Route>
                <Route exact path="/likedlist">
                  <LikeList
                    likedMovies={likedMovies}
                    clickBlockBtn={this.clickBlockBtn}
                    clickLikeBtn={this.clickLikeBtn}
                  />
                </Route>
                <Route exact path="/blockedlist">
                  <BlockList
                    blockedMovies={blockedMovies}
                    clickBlockDelete={this.clickBlockDelete}
                    clickFav={this.clickFav}
                  />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
