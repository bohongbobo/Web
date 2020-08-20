import React, { useState } from "react";
import ProgressBar from "./Progressbar";
import "./ProgressBar.css";

const ControlledProgressbar = () => {
  const [progress, setProgress] = useState(0);

  const decrease = () => {
    if (progress > 0) {
      setProgress(Number(progress - 5));
      console.log(progress, "decrease");
    }
  };

  const increase = () => {
    if (progress < 100) {
      setProgress(Number(progress + 5));
      console.log(progress, "increase");
    }
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
      </div>
      <div className="ProgressBarborder">
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default ControlledProgressbar;
