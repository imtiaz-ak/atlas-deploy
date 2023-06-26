import React from "react";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <Left />
                <Center />
                <Right />
            </div>
        </header>
    );
}

export default Header;
