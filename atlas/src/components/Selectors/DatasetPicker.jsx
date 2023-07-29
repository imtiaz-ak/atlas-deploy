import React from "react";
import dataset from "../../data/dataset";
import { motion } from "framer-motion";

function DatasetPicker() {
    return (
        <motion.div
            key="dataset-picker"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 55 }}
            exit={{ opacity: 0, y: 45 }}>
            <div className="dataset-picker">
                <div className="dataset-picker__container">
                    {Object.keys(dataset).map((key) => {
                        return (
                            <div className="dataset-column">
                                <div
                                    className="dataset-column__heading"
                                    style={{
                                        backgroundColor: dataset[key].bg,
                                    }}>
                                    <img src={dataset[key].icon} alt="" />
                                    <span>{key}</span>
                                </div>
                                <ul className="dataset-column__list">
                                    {dataset[key].options.map((option) => {
                                        return (
                                            <li className="dataset-column__list-item">
                                                {option}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}

export default DatasetPicker;
