import React from "react";
import DatasetSelector from "./DatasetSelector";
import IntensitySelector from "./IntensitySelector";

function Selectors({intensitySelectorOn, toggleintensitySelectorOn}) {
    return (
        <>
            <div className="selectors-container">
                <DatasetSelector />
            </div>
            <IntensitySelector intensitySelectorOn={intensitySelectorOn} toggleintensitySelectorOn={toggleintensitySelectorOn} />
        </>
    );
}
export default Selectors;
