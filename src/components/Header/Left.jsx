import logo from "../../assets/logo.svg";
import React from "react";

function Left() {
    return (
        <div className="header__left">
            <div className="header__left__logo">
                <img src={logo} alt="stories of change logo" className="logo" />
            </div>
            <div className="vertical-divider"></div>
            <div className="header__left__name">
                <span>Climate Atlas BETA</span>
            </div>
        </div>
    );
}

export default Left;
