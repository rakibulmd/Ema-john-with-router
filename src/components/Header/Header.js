import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
                {/* <a href="/shop">Shop</a> */}
                <Link to="/shop">Shop</Link>
                {/* <a href="/orders">Orders</a> */}
                <Link to="/orders">Orders</Link>
                {/* <a href="/inventory">Inventory</a> */}
                <Link to="/inventory">Inventory</Link>
                {/* <a href="/about">About</a> */}
                <Link to="/about">About</Link>
                {user ? (
                    <button onClick={handleSignOut}>Sign Out</button>
                ) : (
                    <Link to="/login">Log In</Link>
                )}
            </div>
        </nav>
    );
};

export default Header;
