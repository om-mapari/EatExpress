import React from "react";
import logo from "../logo.png";

function Navbar() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
