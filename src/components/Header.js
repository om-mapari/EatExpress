import { useState } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom"; // component

function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about"> About </Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact </Link>
                    </li>
                    <li>
                        <Link to="/cart"> Cart</Link>
                    </li>
                </ul>
            </div>

            <button onClick={() => setLoggedIn(!loggedIn)}>
                {loggedIn ? "logOut" : "logIn"}
            </button>
        </div>
    );
}

export default Header;
