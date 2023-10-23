import React, { useState } from "react";
import { useRef } from "react";

function Slider() {
    // max value for the input range
    const MAX = 1800;

    const sliderBar = useRef("");
    const [sliderValue, setSliderValue] = useState(0);

    const handleChange = (e) => {
        setSliderValue(e.currentTarget.value);
        // find the width by dividing the current value by the maximum and then
        // finding the percentage by multipying essentially finding what % of the slider is filled
        const width = (e.currentTarget.value / MAX) * 100;
        sliderBar.current.style.width = `${width}%`;
    };

    return (
        <div className="slider-container">
            <div className="slider-input-container">
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
            </div>
        </div>
    );
}

export default Slider;
