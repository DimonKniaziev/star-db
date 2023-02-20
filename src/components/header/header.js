import React from "react";

import './header.css';

const Header = ({onServiceChange}) => {
    return (
        <div>
            <h3>
                Star DB                
            </h3>
            <ul>
                <li>
                    <span>People</span>
                </li>
                <li>
                    <span>Planets</span>
                </li>
                <li>
                    <span>Starships</span>
                </li>
            </ul>
            <button onClick={onServiceChange}>
                Change Service
            </button>
        </div>
    );
};

export default Header;