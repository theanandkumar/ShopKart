/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Dropdown = ({
  className,
  text = "Dopdown",
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
}) => {
  return (
    <div className={`dropdown ${className}`}>
      <div className="overlap">
        <div className="dopdown">{text}</div>
        <img className="img" alt="Line" src="/img/line-34.png" />
      </div>
      <div className="overlap-group">
        <div className={`div ${divClassName}`}>PRODUCT 1</div>
        <div className={`text-wrapper-2 ${divClassNameOverride}`}>PRODUCT 2</div>
        <div className={`text-wrapper-3 ${divClassName1}`}>PRODUCT 3</div>
        <div className={`text-wrapper-4 ${divClassName2}`}>PRODUCT 4</div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
};
