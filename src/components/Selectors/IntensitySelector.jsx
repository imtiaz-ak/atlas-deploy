import React from "react";
import { useState, useContext } from "react";
import DatasetContext from "../../context/DatasetContext";

function IntensitySelector({intensitySelectorOn, toggleintensitySelectorOn}) {
    const [isMore, setIsMore] = useState(false);
    const { datasetConfig, changeDatasetEmission } = useContext(DatasetContext)

    const handleMoreClick = () => {
        setIsMore(true);
        changeDatasetEmission('ssp370')
    };

    const handleLessClick = () => {
        setIsMore(false);
        changeDatasetEmission('ssp245')
    };

    return (
        <div className={ intensitySelectorOn? "intensity-selector selector intensity-selector-on" : "intensity-selector selector"}>
            <button
                        tabIndex="-1"
                        className="close-sidebar"
                        onClick={()=>toggleintensitySelectorOn(false)}>
                        +
                    </button>
            <div className="intensity-text selector-text" style={{marginBottom:"10px"}}>
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
