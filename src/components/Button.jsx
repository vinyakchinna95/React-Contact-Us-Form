import React from "react";
import './Button.css';
const Button = ({ name, style, onClick }) => {
    return (
        <button style={{ ...style }} onClick={onClick}>{name}</button>
    );
};

export default Button;
