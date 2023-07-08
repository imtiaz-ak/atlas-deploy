import React from "react";
import { useContext } from "react";
import DistrictContext from "../../context/DistrictContext";
import SidebarContext from "../../context/SidebarContext";

function TempSidebar() {
    const { sidebarActive, toggleSidebar } = useContext(SidebarContext);
    const className = sidebarActive
        ? "temp-sidebar sidebar-active"
        : "temp-sidebar";
    console.log(sidebarActive)
    const { district } = useContext(DistrictContext);

    return (
        <div className={className}>
            <div className="sidebar-container">
                <h2>{district?.name}</h2>
                <p>Max Temp: {district?.historicalData?.maxTemperature}</p>
                <p>Future Max Temp: {district?.futureData?.maxTemperature}</p>
                <p>
                    Change:{" "}
                    {(
                        district?.futureData?.maxTemperature -
                        district?.historicalData?.maxTemperature
                    ).toFixed(2)}
                </p>
                <button
                    tabIndex="-1"
                    className="close-sidebar"
                    onClick={toggleSidebar}>
                    +
                </button>
            </div>
        </div>
    );
}

export default TempSidebar;
