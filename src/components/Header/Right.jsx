import Button from "./Button";
import support from "../../assets/support.svg";
import guide from "../../assets/guide.svg";
import share from "../../assets/share.svg";

import React from "react";

function Right() {
    return (
        <div className="header__right">
            <Button text="Support" icon={support} />
            <Button text="Guide" icon={guide} />
            <Button text="Share" icon={share} />
        </div>
    );
}

export default Right;
