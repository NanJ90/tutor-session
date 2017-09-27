import React from "react";
import { Link } from "react-router";

const Navbar = () => (
<nav className="white" role="navigation">
        <div className="nav-wrapper container">
            <a id="logo-container" data-activates="sidebar" href="/" className="brand-logo"><img className="hoverable logomain" src="./img/plw-logo.png"/></a>
            <ul className="right hide-on-med-and-down">
                <li><a href="./">Home</a></li>
                <li><a href="#">New Student</a></li>
                <li><a href="developers">About Developers</a></li>                
            </ul>
            <ul id="sidebar" className="side-nav">
                <img className="sidepic" src="./img/gaelle.jpg"/>
                <li><a href="./">Home</a></li>
                <li><a href="#">New Student</a></li>
                <li><a href="developers">About Developers</a></li>

            </ul>
            <a href="#" data-activates="sidebar" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
    </nav>
);

export default Navbar;
