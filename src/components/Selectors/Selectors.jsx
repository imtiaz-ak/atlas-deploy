import React from "react";
import DatasetSelector from "./DatasetSelector";
import IntensitySelector from "./IntensitySelector";

function Selectors({intensitySelectorOn}) {
    return (
        <>
            <div className="selectors-container">
                <DatasetSelector />
            </div>
            <IntensitySelector intensitySelectorOn={intensitySelectorOn} />
        </>
    );
}
export default Selectors;
