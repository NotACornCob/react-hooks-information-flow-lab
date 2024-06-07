import React from "react";

function Header({onDarkModeClick, mode}) {
console.log({mode})
    return  <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {(mode ? "Dark Mode": "Light Mode")}
            </button> 
            </header>
}

export default Header;