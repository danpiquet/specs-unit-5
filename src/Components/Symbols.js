import { current } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
  const currentDisplay = useSelector(selectDisplay);
  return (
    <div className="symbols">
      <div className="stack">
        <h2>{currentDisplay.name.common} Official Flag</h2>
        {currentDisplay.flags ? (
          <img src={currentDisplay.flags.png} />
        ) : (
          "No country flag available"
        )}
      </div>
      <div className="stack">
        <h2>{currentDisplay.name.common} Official Emblem</h2>
        {currentDisplay.coatOfArms ? (
          <img src={currentDisplay.coatOfArms.png} />
        ) : (
          "No country emblem available"
        )}
      </div>
    </div>
  );
};

export default Symbols;
