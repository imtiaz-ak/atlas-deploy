import React from "react";

function District({ name, handleDistrictIdChange, id, setSidebarActive }) {
    const handleClick = () => {
        handleDistrictIdChange(id);
        setSidebarActive(true);
    };

    return (
        <div className="district-box" onClick={handleClick}>
            {name}
        </div>
    );
}

export default District;
