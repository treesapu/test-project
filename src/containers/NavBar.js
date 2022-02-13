import logo from '../logo_v1_gradient.svg';
import React from "react";
import "./NavBar.css";

export default function NavBar() {
    return(
        <a class="navbar-brand col-6" href="/">
          <img src={logo} className="NavBar-logo" alt=""/>
        </a>
    );
}