import React from "react";
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import './item-list.css';

const ItemList = (props) => {    
    const { data, onItemSelected, children: renderLabel } = props;
    const location = useLocation();
    const pathRegEx = /^(\/[A-Za-z0-9]*)/;
    const path = location.pathname.match(pathRegEx)[1];

    const items = data.map((item) => {
        const{id} = item;
        const label = renderLabel(item);

        return (
            <li key={id} onClick={() => onItemSelected(id)}>
                <Link to={`${path}/${id}`}>{label}</Link>
            </li>
        );
    });

    return (
        <ul>
            {items}
        </ul>
    );
};

ItemList.defaultProps = {
    onItemSelected: () => {}
};

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;