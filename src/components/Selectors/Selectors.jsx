import React from "react";
import DatasetSelector from "./DatasetSelector";
import IntensitySelector from "./IntensitySelector";

function Selectors() {
    return (
        <>
            <div className="selectors-container">
                <DatasetSelector />
            </div>
            <IntensitySelector />
        </>
    );
}
export default Selectors;
