import { current } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      <table className="overview-table">
        <tr>
          <td>Continent: </td>
          <td>{currentDisplay.continents}</td>
        </tr>
        <tr>
          <td>Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Borders: </td>
          <td>
            {currentDisplay.borders
              ? currentDisplay.borders.map((e, i, arr) => {
                  return i + 1 === arr.length ? `${e}` : `${e}, `;
                })
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Capital: </td>
          <td>{currentDisplay.capital}</td>
        </tr>
        <tr>
          <td>Languages: </td>
          <td>
            {currentDisplay.languages
              ? Object.keys(currentDisplay.languages).map((e, i, arr) => {
                  return i + 1 === arr.length ? `${e}` : `${e}, `;
                })
              : "N/A"}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
