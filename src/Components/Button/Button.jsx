import React from 'react';
import "./Button.css";

const Button = ({ texto }) => {
    return ( 
        <button className="boton">{texto}</button>
    );
}
 
export default Button;
