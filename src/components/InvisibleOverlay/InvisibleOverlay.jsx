import React from "react";
import TempSidebar from "../TempSidebar";
import Selectors from "../Selectors/Selectors";
import Slider from "../Slider/";
import Sidebar from "../Sidebar/Sidebar";

function InvisibleOverlay() {
    return (
        <div className="invisible-overlay">
            <div className="overlay-wrapper">
                <Sidebar />
                <Selectors />
                {/* <Slider /> */}
            </div>
        </div>
    );
}

export default InvisibleOverlay;
