import React, { useState, useContext } from "react";
import { useRef } from "react";
import DatasetContext from "../../context/DatasetContext";
import HelpContext from "../../context/HelpContext";
import info from "../../assets/info.svg";

function Slider({ sliderOn, toggleSlider }) {

    const [timelineRange, setTimelineRange] = useState('1995-2014')

    // max value for the input range
    const MAX = 1800;
    const { datasetConfig, changeDatasetTimeline } = useContext(DatasetContext)
    const { setHelpState } = useContext(HelpContext)

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
        <div className={sliderOn ? "slider-container slideron" : "slider-container"}>
            <button
                tabIndex="-1"
                className="close-sidebar"
                onClick={() => toggleSlider(false)}>
                +
            </button>
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

            <div className="dataset-selector-btn" style={{ width: "140px", padding: "0", justifyContent: "start" }}>
                <div className="dataset-selector-text selector-text">
                    <p className="weather-type">TEMPERATURE</p>
                    <p className="weather-variable">Time Period</p>
                </div>
                <img src={info} style={{ cursor: "pointer" }} onClick={() => { setHelpState({ helpTitle: 'Time period', helpText: `Time Period' refers to a specific interval or span of time during which certain data, like temperature or precipitation, is collected or analyzed. It could be an annual analysis showing the average temperature of a whole year, or seasonal, focusing on particular parts of the year like summer or winter. This is crucial to understand trends, cycles and patterns in meteorological and climate data. In the case of Bangladesh, selecting different 'Time Periods' could help identify changes in climatic conditions and extremes over time, which can guide planning for climate-adaptive strategies in areas like agriculture, public health, and urban infrastructure.`, active: true }) }} />
            </div>
            <div className="slider-sections">
                <button className={`btn intensity-btn ${'1995-2014' === timelineRange ? 'active' : ''}`} onClick={() => { changeDatasetTimeline('1995-2014'); setTimelineRange('1995-2014') }}>
                    <span>RECENT PAST</span>
                    <p>1995-2014</p>
                </button>
                <button className={`btn intensity-btn ${'2020-2039' === timelineRange ? 'active' : ''}`} onClick={() => { changeDatasetTimeline('2020-2039'); setTimelineRange('2020-2039') }}>
                    <span>IMMEDIATE FUTURE</span>
                    <p>2020-2039</p>
                </button>
                <button className={`btn intensity-btn ${'2040-2059' === timelineRange ? 'active' : ''}`} onClick={() => { changeDatasetTimeline('2040-2059'); setTimelineRange('2040-2059') }}>
                    <span>NEAR FUTURE</span>
                    <p>2040-2059</p>
                </button>
                <button className={`btn intensity-btn ${'2060-2079' === timelineRange ? 'active' : ''}`} onClick={() => { changeDatasetTimeline('2060-2079'); setTimelineRange('2060-2079') }}>
                    <span>MID CENTURE FUTURE</span>
                    <p>2060-2079</p>
                </button>
                <button className={`btn intensity-btn ${'2080-2099' === timelineRange ? 'active' : ''}`} onClick={() => { changeDatasetTimeline('2080-2099'); setTimelineRange('2080-2099') }}>
                    <span>LATE CENTURY FUTURE</span>
                    <p>2080-2099</p>
                </button>
            </div>
        </div>
    );
}

export default Slider;
