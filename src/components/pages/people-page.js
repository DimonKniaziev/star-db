import React from "react";
import { useLocation } from "react-router-dom";
import AppRow from "../app-row";
import { PersonList, PersonDetails } from "../sw-components";

const PeoplePage = () => {
    const location = useLocation();
    const idRegExp = /\/([0-9]*)$/;
    const itemId = location.pathname.match(idRegExp)[1];

    return (
        <AppRow 
            left={<PersonList/>}
            right={<PersonDetails itemId={itemId}/>}
        />
    );
}

export default PeoplePage;