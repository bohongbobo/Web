import React from "react";

const Progressbar = () => {
  const style = {
    height: "30px",
    width: `${this.props.progress}%`,
    backgroundColor: "cyan",
    borderRadius: "5px",
    transition: "width 0.1s ease-in-out",
  };
  return <div style={style}></div>;
};

export default Progressbar;
