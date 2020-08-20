import React, { Component } from "react";
import FunctionalProgressBar from "./FunctionalProgressBar";
import ProgressBar from "./Progressbar";
import "./ProgressBar.css";

export default class ControlledProgressbar extends Component {
  state = {
    progress: 0,
  };

  // componentDidMount = () => {
  //   if (this.state.progress >= 0) {
  //     setInterval(this.increase, 100);
  //   }
  // };

  // componentDidUpdate = () => {
  //   if (this.state.progress >= 100) {
  //     setInterval(this.decrease, 100);
  //   } else if (this.state.progress <= 0) {
  //     setInterval(this.increase, 100);
  //   }
  // };

  decrease = () => {
    if (this.state.progress > 0) {
      let progress = Number(this.state.progress - 5);
      this.setState({
        progress,
      });
      console.log(this.state.progress, "decrease");
    }
  };

  increase = () => {
    if (this.state.progress < 100) {
      let progress = Number(this.state.progress + 5);
      this.setState({
        progress,
      });
      console.log(this.state.progress, "increase");
    }
  };

  render() {
    return (
      <div className="App">
        <div className="buttons">
          <button onClick={this.decrease}>Decrease</button>
          <button onClick={this.increase}>Increase</button>
        </div>
        <div className="ProgressBarborder">
          <ProgressBar progress={this.state.progress} />
        </div>
        <FunctionalProgressBar />
      </div>
    );
  }
}
