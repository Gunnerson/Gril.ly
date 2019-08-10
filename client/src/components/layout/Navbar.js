import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link to="/"
                        style={{
                            fontFamily: "monospace"
                        }}
                        className="col s5 brand-logo left black-text"
                        >
                            <i className="material-icons">extension</i>
                            Gril.ly
                        </Link>

                        <ul id="nav-mobile" className="right hide-=on-med-and-down teal">
                            <li><a href="/register">Register</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;