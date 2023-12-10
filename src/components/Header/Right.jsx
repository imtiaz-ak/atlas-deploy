import Button from "./Button";
import support from "../../assets/support.svg";
import guide from "../../assets/guide.svg";
import share from "../../assets/share.svg";
import { useContext } from "react";
import HelpContext from "../../context/HelpContext";

import React from "react";

function Right() {
    const { setHelpState } = useContext(HelpContext)

    return (
        <div className="header__right">
            <Button text="Support" icon={support} />
            <div onClick={() => {
                console.log('guide was clicked!!')
                setHelpState({
                    helpTitle: 'Guide',
                    helpText: 'guide',
                    active: true
                })
            }}>
                <Button text="Guide" icon={guide} />
            </div>

            <Button text="Share" icon={share} />
        </div>
    );
}

export default Right;
