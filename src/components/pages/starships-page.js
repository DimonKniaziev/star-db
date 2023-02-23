import React from "react";
import { useLocation } from "react-router-dom";
import AppRow from "../app-row";
import { StarshipList, StarshipDetails } from "../sw-components";

const StarshipsPage = () => {
    const location = useLocation();
    const idRegExp = /\/([0-9]*)$/;
    const itemId = location.pathname.match(idRegExp)[1];

    return (
        <AppRow 
            left={<StarshipList/>}
            right={<StarshipDetails itemId={itemId}/>}
        />
    );
}

export default StarshipsPage;