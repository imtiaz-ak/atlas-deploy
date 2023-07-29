import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
import DatasetPicker from "./DatasetPicker";
import { AnimatePresence } from "framer-motion";

function DatasetSelector() {
    const [showPicker, setShowPicker] = useState(false);

    const togglePicker = () => {
        setShowPicker((prev) => !prev);
    };

    return (
        <div className="dataset-selector selector">
            <AnimatePresence>{showPicker && <DatasetPicker />}</AnimatePresence>
            <div className="dataset-selector-btn">
                <button className="btn selector-arrow" onClick={togglePicker}>
                    <img src={arrow} alt="arrow" />
                </button>

                <div className="dataset-selector-text selector-text">
                    <p className="weather-type">HOT WEATHER</p>
                    <p className="weather-variable">
                        Number of Cooling degree days
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DatasetSelector;
