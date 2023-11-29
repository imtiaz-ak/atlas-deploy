import React, { useState, useContext } from "react";
import { useRef } from "react";
import DatasetContext from "../../context/DatasetContext";
import info from "../../assets/info.svg";

function Slider() {
    // max value for the input range
    const MAX = 1800;
    const { datasetConfig, changeDatasetTimeline } = useContext(DatasetContext)

    const sliderBar = useRef("");
    const [sliderValue, setSliderValue] = useState(0);

    const setTimeline = (width) => {
        console.log(`changing timeline according to width ${width}`)
        if (0 <= width && width < 20) {
            changeDatasetTimeline('1995-2014')
        } else if (20 <= width && width < 40) {
            changeDatasetTimeline('2020-2039')
        } else if (40 <= width && width < 60) {
            changeDatasetTimeline('2040-2059')
        } else if (60 <= width && width < 80) {
            changeDatasetTimeline('2060-2079')
        } else if (80 <= width && width <= 100) {
            changeDatasetTimeline('2080-2099')
        }
    }

    const handleChange = (e) => {
        setSliderValue(e.currentTarget.value);
        // find the width by dividing the current value by the maximum and then
        // finding the percentage by multipying essentially finding what % of the slider is filled
        const width = (e.currentTarget.value / MAX) * 100;
        sliderBar.current.style.width = `${width}%`;
        setTimeline(width)
    };

    return (
        <div className="slider-container">
            {/* <div className="slider-input-container">
                <div className="slider-bar" ref={sliderBar}></div>
                <input
                    onChange={handleChange}
                    type="range"
                    name="time"
                    className="slider-input"
                    min="0"
                    max={MAX}
                    value={sliderValue}
                />
            </div>
            <div className="slider-sections">
                <span className="slider-section">Recent Past</span>
                <span className="slider-section">Immediate Future</span>
                <span className="slider-section">Near Future</span>
            </div> */}
            <div className="dataset-selector-btn" style={{width:"140px",padding:"0",justifyContent:"start"}}>
                <div className="dataset-selector-text selector-text">
                    <p className="weather-type">TEMPERATURE</p>
                    <p className="weather-variable">Time Period</p>
                </div>
                <img src={info} />
            </div>
            <div className="slider-sections">
                <button className="btn intensity-btn active">
                    <span>Recent past</span>
                    <p>1995-2014</p>
                </button>
                <button className="btn intensity-btn">
                    <span>Recent past</span>
                    <p>1995-2014</p>
                </button>
                <button className="btn intensity-btn">
                    <span>Recent past</span>
                    <p>1995-2014</p>
                </button>
                <button className="btn intensity-btn">
                    <span>mid century future</span>
                    <p>1995-2014</p>
                </button>
                <button className="btn intensity-btn">
                    <span>Recent past</span>
                    <p>1995-2014</p>
                </button>
            </div>
        </div>
    );
}

export default Slider;
