import React, { useState } from "react";
import { useRef } from "react";

function Slider() {
    const sliderBar = useRef("");
    const [sliderValue, setSliderValue] = useState(0);

    const handleChange = (e) => {
        setSliderValue(e.currentTarget.value);
        const width = (e.currentTarget.value / 1800) * 100;
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
                    max="1800"
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
