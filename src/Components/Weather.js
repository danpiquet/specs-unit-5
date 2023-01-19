import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
  const [weather, setWeather] = useState();
  const display = useSelector(selectDisplay);
  const latitude = display.capitalInfo.latlng[0];
  const longitude = display.capitalInfo.latlng[1];

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude},${longitude}` },
      headers: {
        "X-RapidAPI-Key": "920c85ef8fmsh40c00e4470153bcp12c48fjsnb53fda4e261f",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Conditions: </td>
          <td>{weather.current.condition.text}</td>
        </tr>
        <tr>
          <td>Temperature: </td>
          <td>{weather.current.temp_f} f</td>
        </tr>
        <tr>
          <td>Feels Like: </td>
          <td>{weather.current.feelslike_f} f</td>
        </tr>
        <tr>
          <td>Humidity: </td>
          <td>{weather.current.humidity}%</td>
        </tr>
        <tr>
          <td>Wind Speed: </td>
          <td>{weather.current.wind_mph} mph</td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
