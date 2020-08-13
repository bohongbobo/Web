import React from "react";

export default function LoadingSpinner() {
  return (
    <div
      className="preloader-wrapper big active"
      style={{ marginTop: "130px" }}
    >
      <div className="spinner-layer spinner-blue">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}
