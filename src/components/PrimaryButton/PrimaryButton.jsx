/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const PrimaryButton = ({ className }) => {
  return (
    <div className={`primary-button ${className}`}>
      <div className="frame">
        <div className="div-wrapper">
          <div className="text-wrapper">See more</div>
        </div>
        <img className="vector" alt="Vector" src="/img/vector-4.png" />
      </div>
      <img className="line" alt="Line" src="/img/line-16-1.png" />
    </div>
  );
};
