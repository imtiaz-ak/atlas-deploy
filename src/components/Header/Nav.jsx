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
                    <a href="#">HOME</a>
                </li>
                <li className="nav-item">
                    <a href="#">CLIMATE ATLAS</a>
                </li>
                <li className="nav-item">
                    <a href="#">DOCUMENTARY</a>
                </li>
                <li className="nav-item">
                    <a href="#">INSIGHTS</a>
                </li>
                <li className="nav-item">
                    <a href="#">SUPPORTERS</a>
                </li>
                <li className="nav-item">
                    <a href="#">ABOUT US</a>
                </li>
                <li className="nav-item">
                    <a href="#">THE TEAM</a>
                </li>
            </ul>
        </motion.nav>
    );
}

export default Nav;
