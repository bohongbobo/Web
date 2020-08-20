import React, { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [photos, setphotos] = useState([]);
  const [index, setindex] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setphotos(data));
  }, []);

  const showImg = () => {
    let temp = "";
    let tempTitle = "";
    photos.forEach((photo, count) => {
      if (photo.id === index) {
        temp = photo.url;
        tempTitle = photo.title;
      }
    });
    return <img src={temp} alt={tempTitle} />;
  };

  const showLast = () => {
    if (index > 1) {
      setindex(index - 1);
    }
    // console.log(this.state.index)
  };

  const showNext = () => {
    setindex(index + 1);

    // console.log(this.state.index)
  };

  const search = (e) => {
    if (e.key === "Enter") {
      if (e.target.value >= 1) {
        setindex(Number(e.target.value));
      }
    }
  };

  // console.log(this.state.photo[this.state.index])
  // const { photos, index } = this.state;
  return (
    <div className="App">
      <h3>Carousel</h3>
      <input
        id="carousel-input"
        placeholder="Enter a number"
        type="number"
        onKeyPress={(e) => search(e)}
      />
      <br />
      <br />
      <div className="main">
        <button onClick={showLast}>Last</button>
        {showImg()}
        <button onClick={showNext}>next</button>
      </div>
    </div>
  );
};

export default Carousel;
