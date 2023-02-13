import React from "react";
import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div>
            <img src={icon} alt="ERROR"/>
            <h4>
                BOOM!
            </h4>
            <span>
                something has gone terribly
            </span>
            <span>
                (but we already sent drons to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;