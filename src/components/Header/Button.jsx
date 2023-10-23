import React from "react";

function Button({ text, icon }) {
    return (
        <button className="header__right__btn">
            <img src={icon} alt="header button" />
            <span>{text}</span>
        </button>
    );
}

export default Button;
