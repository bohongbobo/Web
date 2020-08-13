import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const M = window.M;
    let carousel = document.querySelector(".carousel");
    M.Carousel.init(carousel, {});
  });
  return (
    <div>
      <h6 className="white-text welcome ">Welcome! this is da awesome home page</h6>
      <div className="carousel">
        <a className="carousel-item" href="#one!">
          <img
            src="https://www.mauvais-genres.com/26247/avengers-endgame-original-movie-poster-15x21-in-2019-anthony-russo-robert-downey-jr.jpg"
            alt="img1"
          />
        </a>
        <a className="carousel-item" href="#two!">
          <img
            src="https://res.cloudinary.com/dyx4yhvoq/image/upload/v1584097036/5c266428c2172c001bc94b9e/wu8qbrraahdqqgm64kql.jpg"
            alt="img2"
          />
        </a>
        <a className="carousel-item" href="#three!">
          <img
            src="https://i5.walmartimages.com/asr/8e5148b7-495c-42d7-9a60-7c5b6a495f6a_3.017170e65273f33be578a1804101ca5f.jpeg"
            alt="img3"
          />
        </a>
        <a className="carousel-item" href="#four!">
          <img
            src="https://cdn11.bigcommerce.com/s-yshlhd/images/stencil/1280x1280/products/22054/166260/full.spiesindisguise_28879__35503.1579143091.jpg?c=2?imbypass=on"
            alt="img4"
          />
        </a>
        <a className="carousel-item" href="#five!">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/91nB2P7VgvL._AC_SL1500_.jpg"
            alt="img5"
          />
        </a>
      </div>
    </div>
  );
};
export default HomePage;
