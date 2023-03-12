import { useState } from "react";
import logo from "../logo.png";

function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
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

            <button onClick={() => setLoggedIn(!loggedIn)}>
                {loggedIn ? "logOut" : "logIn"}
            </button>
        </div>
    );
}

export default Header;
