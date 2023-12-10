import React, { useState, useContext } from "react";
import arrow from "../../assets/arrow.svg";
import DatasetPicker from "./DatasetPicker";
import { AnimatePresence } from "framer-motion";
import DatasetContext from "../../context/DatasetContext";
import info from "../../assets/info.svg";
import Modal from "../Common/Modal";
import HelpContext from "../../context/HelpContext";


const helpTextMap = {
    "Cooling Degree Days": "Cooling Degree Days refers to a measure used primarily in energy calculations. It quantifies the demand for energy needed to cool buildings. Essentially, it represents the number of degrees that a day's average temperature is above 18°C (or another base temperature), which helps in understanding the cooling requirements. In the context of climate change, increased Cooling Degree Days indicate higher temperatures and hence more energy required for cooling, informing about the possible implications of global warming.",
    "Hot Days Over 35°C": "Hot days over 35°C degrees Celsius' is a term that represents the number of days within a specified time period (typically a year) when the air temperature exceeds a selected temperature threshold, 35°C. In a climate change context, it helps monitor the frequency of unusually hot days which might be a result of global warming. Understanding this in the Bangladesh context could illustrate adverse impacts on public health, agriculture, and overall economy, helping to devise suitable climate-resilient strategies.",
    "Hot Days Over 40°C": "Hot days over 40°C degrees Celsius' is a term that represents the number of days within a specified time period (typically a year) when the air temperature exceeds a selected temperature threshold, 40°C. In a climate change context, it helps monitor the frequency of unusually hot days which might be a result of global warming. Understanding this in the Bangladesh context could illustrate adverse impacts on public health, agriculture, and overall economy, helping to devise suitable climate-resilient strategies.",
    "Hot Days Over 45°C": "Hot days over 45°C degrees Celsius' is a term that represents the number of days within a specified time period (typically a year) when the air temperature exceeds a selected temperature threshold, 45°C. In a climate change context, it helps monitor the frequency of unusually hot days which might be a result of global warming. Understanding this in the Bangladesh context could illustrate adverse impacts on public health, agriculture, and overall economy, helping to devise suitable climate-resilient strategies.",
    "Summer Days": "Summer Days' is a term that corresponds to the count of days over a year where the maximum temperature surpasses 25°C. This measurement is crucial while examining climate change, as an increase in the number of 'Summer Days' might hint towards a warming trend. This is particularly significant for Bangladesh due to its tropical monsoon climate, as an increase in 'Summer Days' could contribute to heatwaves, severe discomfort, and might even have implications on agricultural practices.",

    "Surface Air Maximum": "Surface Air Maximum' refers to the highest temperature recorded at the Earth's surface in a designated area within a specified time period, often a 24 hour day.It is a key indicator in the assessment of weather patterns and climate shifts.In the context of Bangladesh, monitoring changes in 'Surface Air Maximum' values is crucial given the country's susceptibility to heatwaves and intense summer heat, attributable to climate change. A rising trend in these values can provide important insights for planning heat-health warning systems, energy consumption models, and adaptive farming techniques.",
    "Surface Air Minimum": "Surface Air Minimum' refers to the lowest temperature recorded at the Earth's surface within a specified area and time span, often a 24-hour day. It provides valuable information in understanding weather patterns and changes in climate. For Bangladesh, tracking the 'Surface Air Minimum' is crucial particularly due to its vulnerability to cold waves, which have significant impacts on public health and agriculture. Moreover, in the context of global warming, shifts in 'Surface Air Minimum' values can point towards trends in climate variability and help in climate change mitigation strategies.",
    "Maximum Over 26°C": "Maximum over 26°C degrees Celsius' is a term that denotes the number of days within a designated time frame, usually a year, where the maximum temperature surpasses a preset threshold, 26°C degrees Celsius. It serves as a significant indicator for monitoring heat extremes and potential global warming evidence. As Bangladesh grapples with the impacts of climate change, understanding 'Maximum over 26°C degrees Celsius' data can reveal trends of increasing heat extremes, which could influence decisions for issues like heat health warning systems, cooling demand in the energy sector, and adaptations in agricultural practices.",
    "Maximum Over 29°C": "Maximum over 29°C degrees Celsius' is a term that denotes the number of days within a designated time frame, usually a year, where the maximum temperature surpasses a preset threshold, 29°C degrees Celsius. It serves as a significant indicator for monitoring heat extremes and potential global warming evidence. As Bangladesh grapples with the impacts of climate change, understanding 'Maximum over 29°C degrees Celsius' data can reveal trends of increasing heat extremes, which could influence decisions for issues like heat health warning systems, cooling demand in the energy sector, and adaptations in agricultural practices.",
    "Single Day Maximum": "Single Day Maximum' refers to the highest temperature recorded within a single day at a given place. This metric is crucial in examining temperature extremes and potential heat wave events. For a country like Bangladesh, which is grappling with climate change impacts, tracking 'Single Day Maximum' temperatures helps to monitor and establish climate variability and trends. Data on such high-temperature extremes can assist in formulating heat-related health advisories, planning energy needs, and deciding crop management practices amid rising temperatures.",

    "Precipitation Percent Change": "Precipitation percentage change' indicates the variation, usually over time, in the amount of rainfall or snowfall at a particular location, expressed in percentage. This measure is key to understanding climate change, as shifts in precipitation patterns can be indicators of changing climate systems. In the case of Bangladesh, being a country highly vulnerable to extreme rainfall events and cyclones, monitoring the 'Precipitation Percentage Change' can offer insights into potential changes in monsoon patterns, flooding risks, and the possible implications for agriculture, urban planning, and water resource management.",
    "Above 50mm": "Above 50mm' is a term used when referring to precipitation levels. It indicates the number of days in a specific timeframe when the recorded rainfall exceeded 50 millimetres. This metric is particularly important when tracking heavy rainfall or potential flood events. For Bangladesh, a country regularly facing severe flooding issues, understanding the frequency of 'Above 50mm' rainfall days can provide significant insights into flood risks, supporting the development of effective flood risk management strategies and infrastructure planning in the context of changing climate scenarios.",
    "Largest 1-Day Precipitation": "Largest 1-day Precipitation' refers to the maximum volume of rainfall that falls in a single day at a specific location. This measure is significant in identifying extreme rainfall events, often leading to acute flooding situations. In a country such as Bangladesh, which is highly susceptible to heavy monsoonal downpours and tropical cyclones, monitoring the 'Largest 1-day Precipitation' helps to better anticipate and manage potential flood risks. Additionally, it aids in understanding the frequency and severity of heavy rainfall events in the context of climate change, supporting the planning for resilient infrastructure and flood mitigation strategies.",
    "Largest 5-Day Precipitation": "Largest 5-day Precipitation' refers to the maximum amount of rainfall recorded over a contiguous five-day period at a given location. It is a crucial measure in identifying significant multi-day rainfall occurrences, which can lead to prolonged and severe flooding situations. For Bangladesh, a country particularly vulnerable to heavy monsoon rains and cyclones, keeping track of instances of 'Largest 5-day Precipitation' can help in assessing and preparing for flood risks. Furthermore, it can aid in understanding the patterns of heavy rainfall events under the influence of climate change, assisting in decisions for robust flood management strategies and infrastructure resilience.",
}

const categoryMap = {
    "Cooling Degree Days": "Hot Weather",
    "Hot Days Over 35°C": "Hot Weather",
    "Hot Days Over 40°C": "Hot Weather",
    "Hot Days Over 45°C": "Hot Weather",
    "Summer Days": "Hot Weather",

    "Surface Air Maximum": "Temperature",
    "Surface Air Minimum": "Temperature",
    "Maximum Over 26°C": "Temperature",
    "Maximum Over 29°C": "Temperature",
    "Single Day Maximum": "Temperature",

    "Precipitation Percent Change": "Precipitation",
    "Above 50mm": "Precipitation",
    "Largest 1-Day Precipitation": "Precipitation",
    "Largest 5-Day Precipitation": "Precipitation"
}

function DatasetSelector() {
    const [showPicker, setShowPicker] = useState(false);

    const togglePicker = () => {
        setShowPicker((prev) => !prev);
    };

    const { setHelpState } = useContext(HelpContext)

    const { datasetConfig } = useContext(DatasetContext)
    const datasetName = datasetConfig['name']
    console.log(datasetName, '<--- DATASET NAME')

    return (
        <div className="dataset-selector selector">
            <AnimatePresence>{showPicker && <DatasetPicker />}</AnimatePresence>
            <div className="dataset-selector-btn">
                <button className="btn selector-arrow" onClick={togglePicker}>
                    <img src={arrow} alt="arrow" />
                </button>

                <div className="dataset-selector-text selector-text">
                    <p className="weather-type"><span>DATASET</span><span style={{ fontWeight: 'bold', color: "black" }}>{categoryMap[datasetName]}</span></p>
                    <p className="weather-variable">
                        {datasetName}
                    </p>
                </div>
                <img src={info} style={{ cursor: "pointer" }} onClick={() => {
                    setHelpState({
                        active: true,
                        helpText: helpTextMap[datasetName],
                        helpTitle: datasetName
                    })
                }} />
            </div>
        </div >
    );
}

export default DatasetSelector;
