import React from "react";
import { useLocation } from "react-router-dom";
import AppRow from "../app-row";
import { PlanetList, PlanetDetails } from "../sw-components";

const PlanetsPage = () => {
    const location = useLocation();
    const idRegExp = /\/([0-9]*)$/;
    const itemId = location.pathname.match(idRegExp)[1];

    return (
        <AppRow 
            left={<PlanetList/>}
            right={<PlanetDetails itemId={itemId}/>}
        />
    );
}

export default PlanetsPage;