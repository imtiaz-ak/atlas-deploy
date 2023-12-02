import React from "react";
import { useState, useContext } from "react";
import DatasetContext from "../../context/DatasetContext";
import info from "../../assets/info.svg";
import HelpContext from "../../context/HelpContext";

function IntensitySelector({ intensitySelectorOn, toggleintensitySelectorOn }) {
    const [isMore, setIsMore] = useState(false);
    const { datasetConfig, changeDatasetEmission } = useContext(DatasetContext)

    const { setHelpState } = useContext(HelpContext)

    const handleMoreClick = () => {
        setIsMore(true);
        changeDatasetEmission('ssp370')
    };

    const handleLessClick = () => {
        setIsMore(false);
        changeDatasetEmission('ssp245')
    };

    return (
        <div className={intensitySelectorOn ? "intensity-selector selector intensity-selector-on" : "intensity-selector selector"}>
            <button
                tabIndex="-1"
                className="close-sidebar"
                onClick={() => toggleintensitySelectorOn(false)}>
                +
            </button>
            <div style={{ display: "flex" }}>
                <div className="intensity-text selector-text" style={{ marginBottom: "10px" }}>
                    <p className="emission-text">GHG EMISSION</p>
                    <p className="climate-change-text">Climate Change</p>
                </div>
                <img src={info} style={{ marginLeft: "10px" }} onClick={() => { setHelpState({ active: true, helpText: `GHG Emissions' stands for 'Greenhouse Gas Emissions'. These are emissions of gases that trap heat in the Earth's atmosphere, contributing to the 'greenhouse effect' and global warming. The primary GHGs are carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O), along with industrial gases like hydrofluorocarbons. In the context of Bangladesh, tracking GHG emissions is essential given its vulnerability to climate changes. The data around GHG emissions can help design policies for climate change mitigation by reducing emissions and shifting towards sustainable practices in energy production, waste management, agriculture, and transport sectors.`, helpTitle: 'GHG EMISSION' }) }} />
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
