import React from "react";
import TempSidebar from "../TempSidebar";
import Sidebar from "../Sidebar/Sidebar";

function InvisibleOverlay() {
    return (
        <div className="invisible-overlay">
            <div className="overlay-wrapper">
                <Sidebar />
            </div>
        </div>
    );
}

export default InvisibleOverlay;
