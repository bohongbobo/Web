import React, { useState } from "react";
import "../App.css";

export default function App() {
    const [progress, setProgress] = useState(0);
    
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

    const style = {
        height: "30px",
        width: `${progress}%`,
        backgroundColor: "cyan",
        borderRadius: "5px",
        transition: "width 1s ease-in-out",
    };
    return (
        <div className="App">
            <div className="buttons">
                <button onClick={decrease}>Decrease</button>
                <button onClick={increase}>Increase</button>
            </div>
            <div className="ProgressBarborder">
                <div style={style}></div>
            </div>
        </div>
    );

}
