import React from "react";
import District from "./District";

function Districts({ districts, handleDistrictIdChange, setSidebarActive }) {
    return (
        <div className="districts-container">
            {districts.map((district) => {
                return (
                    <District
                        name={district.name}
                        key={district.id}
                        id={district.id}
                        handleDistrictIdChange={handleDistrictIdChange}
                        setSidebarActive={setSidebarActive}
                    />
                );
            })}
        </div>
    );
}

export default Districts;
