import React from "react";

function TempSidebar({ district, sidebarActive, setSidebarActive }) {
    const className = sidebarActive
        ? "temp-sidebar sidebar-active"
        : "temp-sidebar";

    return (
        <div className={className}>
            <div className="sidebar-container">
                <h2>{district?.name}</h2>
                <p>Mean Temp: {district?.historicalData?.meanTemperature}</p>
                <p>Future Mean Temp: {district?.futureData?.meanTemperature}</p>
                <p>Change: {(district?.futureData?.meanTemperature - district?.historicalData?.meanTemperature).toFixed(2)}</p>
                <button
                    className="close-sidebar"
                    onClick={() => setSidebarActive(false)}>
                    +
                </button>
            </div>
        </div>
    );
}

export default TempSidebar;
