var request = new XMLHttpRequest();
const API_KEY = "76177c7fb779da86955a3e56aab3bcec";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
let page = 1;
const likedMovie = [];
document.getElementById("config").style.display = "none";
document.getElementById("configPage").style.display = "none";

$(window).load(function () {
  $(".loader").fadeOut("slow");
});



const genre_map = {
  "28": "Action",
  "12": "Adventure",
  "16": "Animation",
  "35": "Comedy",
  "80": "Crime",
  "99": "Documentary",
  "18": "Drama",
  "10751": "Family",
  "14": "Fantasy",
  "36": "History",
  "27": "Horror",
  "10402": "Music",
  "9648": "Mystery",
  "10749": "Romance",
  "878": "Science Fiction",
  "10770": "TV Movie",
  "53": "Thriller",
  "10752": "War",
  "37": "Western"
};
const genre_color = {
  "28": "ForestGreen",
  "12": "SteelBlue",
  "16": "pink",
  "35": "DarkTurquoise",
  "80": "DarkSlateBlue",
  "99": "FireBrick",
  "18": "LightSeaGreen",
  "10751": "GoldenRod",
  "14": "Salmon",
  "36": "Olive",
  "27": "Maroon",
  "10402": "Fuchsia",
  "9648": "LightSkyBlue",
  "10749": "Romance",
  "878": "LightCoral",
  "10770": "Indigo",
  "53": "DarkViolet",
  "10752": "Gold",
  "37": "IndianRed"
};

prev = () => {
  if (page > 1) {
    page--;
    document.getElementById("movieContainer").innerHTML = "";
    getMovie();
  }
  // console.log(page);
};

next = () => {
  if (page !== 500) {
    page++;
    document.getElementById("movieContainer").innerHTML = "";
    getMovie();
  }

  // console.log(page);
};

getMovie = () => {
  request.open(
    "GET",
    "https://api.themoviedb.org/3/movie/popular?api_key=76177c7fb779da86955a3e56aab3bcec&language=en-US&page=" +
    page,
    true
  );
  request.onload = function () {
    var data = JSON.parse(this.response);
    // console.log(data);
    document.getElementById("pages").innerHTML =
      "Page " +
      page +
      "/ " +
      data.total_pages +
      " of Total Results " +
      data.total_results;
    document.getElementById("main").style.display = "block";

    if (request.status >= 200 && request.status < 400) {
      document.getElementById("popUp").style.display = "none";
      document.getElementById("likedMovies").style.display = "none";
      document.getElementById("likedMovieContainer").style.display = "none";

      const app = document.getElementById("movieContainer");

      movies = data.results;
      document.getElementById("movieListTitle").style.textDecoration =
        "underline red";
      // console.log(movies);

      for (let movie in movies) {
        let eachMovie = movies[movie];

        const card = document.createElement("div");
        card.className = "card";

        card.style.width = "17%";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.margin = "0px 10px";
        card.id = eachMovie.id;
        // console.log(eachMovie.id);

        app.appendChild(card);



        let img = document.createElement("img");
        img.className = "img";
        // img.id = eachMovie.id;
        img.src = IMG_URL + eachMovie.poster_path;
        img.style.textAlign = "center";
        img.style.alignItems = "center";
        img.style.alignContent = "center";
        img.style.width = "100%";
        card.appendChild(img);

        img.onclick = () => {
          showInfo(eachMovie);
        };

        let like = document.createElement("div");
        like.id = "like";
        card.appendChild(like);

        let innerLike = document.createElement("div");
        innerLike.id = "innerLike";
        innerLike.innerHTML = "like";
        like.appendChild(innerLike);

        like.onclick = () => {
          // check whether the liked list has contain this movie
          if (!likedMovie.includes(eachMovie.title)) {
            likedMovie.push(eachMovie.title);
            getLike(card.cloneNode(true));
          }
          // console.log(likedMovie);
          document.getElementById("number").innerHTML = likedMovie.length;
        };

        // console.log(likedMovie);
        let title = document.createElement("h4");
        title.innerHTML = eachMovie.title;
        title.style.textAlign = "center";
        title.style.width = "100%";
        title.style.height = "20px";
        title.style.overflow = "auto";
        card.appendChild(title);

        let date = document.createElement("P");
        date.innerHTML = eachMovie.release_date;
        card.appendChild(date);
        // let date2 = date.cloneNode(true);

        document.getElementById("config").onclick = () => {
          configClick(likedMovie, eachMovie, card);
        };

      }

    } else {
      console.log("error");
    }
  };
  request.send();
};
document.addEventListener('DOMContentLoaded', getMovie());

showInfo = eachMovie => {
  // console.log(eachMovie);
  // console.log(IMG_URL + eachMovie.poster_path);
  const app1 = document.getElementById("popUp");
  const app = document.getElementById("main");


  app.style.pointerEvents = "none";

  app.style.opacity = "0.3";
  // app.style.display = "none ";
  app1.style.display = "block";
  // app1.style.background = "none";

  const close = document.createElement("div");
  close.id = "close";
  close.style.cursor =
    // "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/meh.png'), pointer";
    close.innerHTML = "CLOSE";

  close.onclick = () => {
    movieBlock.parentNode.removeChild(movieBlock);
    close.parentNode.removeChild(close);

    app.style.opacity = "1";
    // close.innerHTML = "";
    app.style.pointerEvents = "auto";


  };
  app1.appendChild(close);

  // const icon = document.createElement("i");
  // icon.className = "fas fa-flushed";
  // close.appendChild(icon);

  backdrop_img = IMG_URL + eachMovie.backdrop_path;

  const movieBlock = document.createElement("div");
  movieBlock.id = "movieBlock";
  movieBlock.style.position = "fixed";
  movieBlock.style.top = "15%";
  movieBlock.style.display = "flex";
  movieBlock.style.flexDirection = "column";
  movieBlock.style.alignItems = "center";
  movieBlock.style.flexWrap = "wrap";
  movieBlock.style.width = "60%";
  movieBlock.style.height = "auto";

  app1.appendChild(movieBlock);

  const background = document.createElement("div");
  background.id = "background";
  background.style.width = "120%";
  background.style.minHeight = "70vh";
  background.style.backgroundSize = "cover";
  background.style.display = "flex";
  background.style.flexDirection = "row";
  background.style.justifyContent = "flex-start";
  background.style.alignContent = "center";
  background.style.backgroundImage = "url(" + backdrop_img + ")";
  background.style.backgroundRepeat = "no-repeat";
  movieBlock.appendChild(background);

  //   const movieImg = document.createElement("div");
  let img = document.createElement("img");
  img.className = "img";
  img.src = IMG_URL + eachMovie.poster_path;
  img.style.height = "45vh";
  img.style.width = "auto";
  //   img.style.margin = "60px 50px";

  background.appendChild(img);

  const movieInfo = document.createElement("div");
  movieInfo.id = "movieInfo";
  background.appendChild(movieInfo);

  let title = document.createElement("h3");
  title.id = "title";
  let year = eachMovie.release_date.substring(0, 4);
  title.innerHTML = eachMovie.title + "(" + year + ")";
  movieInfo.appendChild(title);

  const categories = document.createElement("div");
  categories.id = "categories";
  categories.style.height = "50px";
  movieInfo.appendChild(categories);

  let OverView = document.createElement("p");
  OverView.id = "OverView";
  OverView.innerHTML = eachMovie.overview;
  movieInfo.appendChild(OverView);

  const company = document.createElement("div");
  company.id = "company";
  movieInfo.appendChild(company);

  let genres = eachMovie.genre_ids;
  // console.log(genres);

  genres.forEach((genreid, index) => {
    let genre_div = document.createElement("div");
    genre_div.style.margin = "10px";
    genre_div.style.padding = "5px 10px";
    genre_div.style.borderRadius = "10px";
    genre_div.style.display = "inline-block";

    let color = genre_color[genreid.toString()];
    genre_div.style.backgroundColor = color;

    genre_div.id = "genre" + index;
    genreName = genre_map[genreid.toString()];
    genre_div.innerHTML = genreName;
    categories.append(genre_div);

    //console.log(cur_movie.id);
  });

  let details_url =
    "https://api.themoviedb.org/3/movie/" +
    eachMovie.id +
    "?api_key=" +
    API_KEY +
    "&language=en-US";

  getProduction(details_url, company);
};

getProduction = (url, productions) => {
  request.open("GET", url, true);
  request.onload = function () {
    const data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      pros = data.production_companies;
      pros.forEach(function (pro, index) {
        //console.log(pro);

        if (pro.logo_path) {
          company_url = IMG_URL + pro.logo_path;
          //console.log(company_url);

          let img = document.createElement("img");
          img.id = "companyImg" + index;
          img.src = company_url;
          img.style.minHeight = "20px";
          img.style.maxHeight = "50px";
          img.style.minWidth = "auto";
          img.style.maxWidth = "auto";
          img.style.padding = "0 5px";
          img.style.display = "inline-block";
          productions.appendChild(img);
        } else {
          let pro_div = document.createElement("p");
          pro_div.id = "company" + index;
          pro_div.style.padding = "0px 5px";
          pro_div.style.alignContent = "center";
          pro_div.style.alignItems = "center";
          //console.log(pro.name);
          pro_div.innerHTML = pro.name;
          productions.appendChild(pro_div);
        }
      });
    } else {
      console.log("error");
    }
  };
  request.send();
};

getLike = div => {
  document.getElementById("likedMovieContainer").appendChild(div);
  // console.log(div);
};

showMovie = () => {
  document.getElementById("popularMovies").style.display = "block";
  document.getElementById("likedMovies").style.display = "none";
  document.getElementById("likedMovieContainer").style.display = "none";
  document.getElementById("likedMoviesTitle").style.textDecoration = "none";
  document.getElementById("movieListTitle").style.textDecoration =
    "underline red";
  document.getElementById("config").style.display = "none";
};

showLiked = () => {
  document.getElementById("popularMovies").style.display = "none";
  document.getElementById("likedMovies").style.display = "block";
  document.getElementById("likedMovieContainer").style.display = "flex";

  document.getElementById("movieListTitle").style.textDecoration = "none";
  document.getElementById("likedMoviesTitle").style.textDecoration =
    "underline red";
  document.getElementById("config").style.display = "none";

  Sortable.create(likedMovieContainer, {
    swap: true,
    swapClass: "highlight",
    animation: 150
  });
};

configClick = (likedMovie, eachMovie) => {

  document.getElementById("main").style.display = "none";
  let likedMovieContainer = document.getElementById("likedMovieContainer");
  likedMovieContainer.style.display = "flex";
  likedMovieContainer.style.marginTop = "10%";

  const closeConifg = document.createElement("div");
  closeConifg.id = "closeConifg";
  closeConifg.innerHTML = "CLOSE";

  closeConifg.onclick = () => {
    document.getElementById("main").style.display = "block";
    likedMovieContainer.style.display = "flex";
    likedMovieContainer.style.flexDirection = "row";
    likedMovieContainer.style.marginTop = "0";

    closeConifg.remove();
    showLiked();
  };
  likedMovieContainer.appendChild(closeConifg);


  Sortable.create(likedMovieContainer, {
    swap: true,
    swapClass: "highlight",
    animation: 150
  });
};


// configClick = (likedMovie, eachMovie, card) => {

//   document.getElementById("main").style.display = "none";
//   let likedMovieContainer = document.getElementById("likedMovieContainer");
//   likedMovieContainer.style.display = "none";

//   let configPage = document.getElementById("configPage");
//   configPage.style.display = "flex";
//   configPage.style.flexDirection = "column";
//   configPage.style.padding = "10%"

//   const closeConifg = document.createElement("div");
//   closeConifg.id = "closeConifg";
//   closeConifg.innerHTML = "CLOSE";

//   closeConifg.onclick = () => {

//     document.getElementById("main").style.display = "block";
//     likedMovieContainer.style.display = "flex";
//     likedMovieContainer.style.flexDirection = "row";
//     likedMovieContainer.style.marginTop = "0";

//     closeConifg.remove();
//     conifgMovies.remove();
//   };
//   configPage.appendChild(closeConifg);

//   const conifgMovies = document.createElement("div");
//   conifgMovies.id = "conifgMovies";
//   conifgMovies.style.top = "10%";
//   conifgMovies.style.width = "100%";
//   conifgMovies.style.textAlign = "center";

//   configPage.appendChild(conifgMovies);

//   likedMovie.map((title, index) => {
//     const name = document.createElement("div");
//     name.id = index;
//     name.className = "name";
//     name.innerHTML = title;
//     name.style.margin = "20px"
//     name.style.background = "lightblue";
//     name.style.padding = "20px";
//     conifgMovies.appendChild(name);
//   });

//   Sortable.create(conifgMovies, {
//     swap: true,
//     swapClass: "highlight",
//     animation: 150
//   });
// };