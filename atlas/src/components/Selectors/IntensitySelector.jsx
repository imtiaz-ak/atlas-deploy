import React from "react";
import { useState } from "react";

function IntensitySelector() {
    const [isMore, setIsMore] = useState(false);

    const handleMoreClick = () => {
        setIsMore(true);
    };

    const handleLessClick = () => {
        setIsMore(false);
    };

    return (
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
    );
}

export default IntensitySelector;
