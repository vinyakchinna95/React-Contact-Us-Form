import React from "react";
import './NavBar.css';
const NavBar =() =>{
    return(
        <nav>
            <div>
                <img src="Frame_1_2.png" alt="logo" />
            </div>
            <ul>
                <li><a href="HOME">HOME</a></li>
                <li><a href="ABOUT">ABOUT</a></li>
                <li><a href="CONTACT">CONTACT</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;