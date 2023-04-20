import React from "react";
import PropTypes from 'prop-types';
import "./app-row.scss"

const AppRow = ({ left, right }) => {
    return (
        <div className="app-row">
            {left}
            {right}
        </div>
    );
}

AppRow.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};

export default AppRow;