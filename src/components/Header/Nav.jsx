import React from "react";
import { motion } from "framer-motion";

function Nav() {
    return (
        <motion.nav
            key="nav"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 80 }}
            exit={{ opacity: 0, y: 70 }}
            className="nav">
            <ul>
                <li className="nav-item">
                    <a href="https://storiesofchange.co/">HOME</a>
                </li>
                <li className="nav-item">
                    <a href="/">CLIMATE ATLAS</a>
                </li>
                <li className="nav-item">
                    <a href="https://storiesofchange.co/documentary.html" target="_blank">DOCUMENTARY</a>
                </li>
                {/* <li className="nav-item">
                    <a href="#">INSIGHTS</a>
                </li>
                <li className="nav-item">
                    <a href="#">SUPPORTERS</a>
                </li> */}
                <li className="nav-item">
                    <a href="https://storiesofchange.co/about.html" target="_blank">ABOUT US</a>
                </li>
                <li className="nav-item">
                    <a href="https://storiesofchange.co/team.html" target="_blank">THE TEAM</a>
                </li>
            </ul>
        </motion.nav>
    );
}

export default Nav;
