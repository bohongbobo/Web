import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    photos: [],
    index: 1,
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          photos: data,
        })
      );
  };

  showImg = () => {
    let temp = "";
    let tempTitle = "";
    this.state.photos.forEach((photo, index) => {
      if (photo.id === this.state.index) {
        temp = photo.url;
        tempTitle = photo.title;
      }
    });
    return <img src={temp} alt={tempTitle} />;
  };

  showLast = () => {
    if (this.state.index > 1) {
      this.setState({
        index: this.state.index - 1,
      });
    }
    // console.log(this.state.index)
  };

  showNext = () => {
    this.setState({
      index: this.state.index + 1,
    });
    // console.log(this.state.index)
  };

  search = (e) => {
    if (e.key === "Enter") {
      if (e.target.value >= 1) {
        this.setState({ index: Number(e.target.value) });
      }
    }
  };

  render() {
    // console.log(this.state.photo[this.state.index])
    // const { photos, index } = this.state;
    return (
      <div className="App">
        <h2>Carousel</h2>
        <input placeholder="Enter a number" type="number" onKeyPress={(e) => this.search(e)} />
        <br />
        <br />
        <div className="main">
          <button onClick={this.showLast}>Last</button>
          {this.showImg()}
          <button onClick={this.showNext}>next</button>
        </div>
      </div>
    );
  }
}
