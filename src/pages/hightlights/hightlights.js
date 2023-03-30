import React from "react";
import "../hightlights/hightlightsStyles.css";

export default function Hightlights() {
  return (
    <div className="hightlightsContainer">
      <div className="windStatusContainer">
        <p className="windStatusFont">Wind Status</p>
        <div className="windStatusStats">
          <p className="windStatusFont-7">7</p>
          <p className="windStatusFont-mph">mph</p>
        </div>
        <p className="windStatusFont-wsw">WSW</p>
      </div>
      <div className="humidityContainer">
        <p className="humidityFont">Humidity</p>
        <div>
          <p className="humidityFont-84">84</p>
          <p className="humidityFont-%">%</p>
          <div>
            <p className="humidityFont-0">0</p>
            <p className="humidityFont-0">50</p>
            <p className="humidityFont-0">100</p>
          </div>
        </div>
      </div>
      <div className="visibilityContainer">
        <p className="visibilityFont-visibility">Visibility</p>
        <p className="visibilityFont-6,4"></p>
        <p className="visibilityFont-miles">miles</p>
      </div>
      <div className="airPresureContainer">
        <p className="airPresureFont">Air Pressure</p>
        <p className="airPresureFont-998">998</p>
        <p className="airPresureFont-mb">mb</p>
      </div>
    </div>
  );
}
