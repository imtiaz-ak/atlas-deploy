import React from "react";
import TempSidebar from "../TempSidebar";
import Selectors from "../Selectors/Selectors";
import Slider from "../Slider/";

function InvisibleOverlay() {
    return (
        <div className="invisible-overlay">
            <div className="overlay-wrapper">
                <TempSidebar />
                <Selectors />
                <Slider />
            </div>
        </div>
    );
}

export default InvisibleOverlay;
