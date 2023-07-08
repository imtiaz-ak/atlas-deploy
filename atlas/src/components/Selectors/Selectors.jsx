import React from 'react'
import arrow from "../../assets/arrow.svg";

function Selectors() {
  return (
    <div className="selectors-container">
        <div className="dataset-selector">
            <button className="btn dataset-selector-btn">
                <img src={arrow} alt="arrow" />
                <div className="dataset-selector-text selector-text">
                    <p className="weather-type">HOT WEATHER</p>
                    <p className="weather-variable">Number of Cooling degree days</p>
                </div>
            </button>
        </div>
        <div className="intensity-selector">
            <div className="intensity-text selector-text">
                <p className="emission">GHG EMISSION</p>
                <p className="climate-change-text">Climate Change</p>
            </div>
        </div>
    </div>
  )
  }
export default Selectors