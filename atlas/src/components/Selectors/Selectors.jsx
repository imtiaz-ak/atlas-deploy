import React from "react";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

function Selectors() {
    const [isMore, setIsMore] = useState(false);

    const handleMoreClick = () => {
        setIsMore(true);
    };

    const handleLessClick = () => {
        setIsMore(false);
    };

    return (
        <div className="selectors-container">
            <div className="dataset-selector selector">
                <button className="btn dataset-selector-btn">
                    <img src={arrow} alt="arrow" />
                    <div className="dataset-selector-text selector-text">
                        <p className="weather-type">HOT WEATHER</p>
                        <p className="weather-variable">
                            Number of Cooling degree days
                        </p>
                    </div>
                </button>
            </div>
            <div className="intensity-selector selector">
                <div className="intensity-text selector-text">
                    <p className="emission-text">GHG EMISSION</p>
                    <p className="climate-change-text">Climate Change</p>
                </div>
                <div className="intensity-buttons">
                    <button
                        className={`btn intensity-btn ${!isMore && "active"}`}
                        onClick={handleLessClick}>
                        Less
                    </button>
                    <button
                        className={`btn intensity-btn ${isMore && "active"}`}
                        onClick={handleMoreClick}>
                        More
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Selectors;
