import React from "react";
import PropTypes from 'prop-types';

const AppRow = ({ left, right }) => {
    return (
        <div>
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