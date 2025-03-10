import React, {useState, useEffect} from "react";
import SwapiService from '../../services/swapi-service.js';
import ErrorIndicator from "../error-indicator/error-idicator.js";
import Spinner from "../spinner/spinner.js";

import './random-planet.scss';

const PlanetView = ({planet}) => {
    const {id, name, population, rotation, diameter} = planet;

    return (
        <div className="random-planet">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet"/>
                <ul>
                    <h4>
                        {name}
                    </h4>
                    <li>
                        <span>Population </span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span>Rotation Period </span>
                        <span>{rotation}</span>
                    </li>
                    <li>
                        <span>Diameter </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
        </div>
    );
}

const RandomPlanet = (props) => {
    const updateInterval = 3500;
    const swapiService = new SwapiService();

    const [state, setState] = useState({
        planet: {},
        loading: true,
        error: false
    })

    useEffect(() => {
        updatePlanet();
   
        const interval = setInterval(() => {
            updatePlanet();
        }, updateInterval);

        return () => clearInterval(interval);
    },[])

    const onPlanetLoaded = (planet) => {
        setState({
            planet,
            loading: false
        });
    };

    const onError = (err) => {
        setState({
            loading: false,
            error: true
        });
    };

    const updatePlanet = () => {
        const id = Math.floor(Math.random()*17 + 3);
        swapiService.getPlanet(id)
        .then(onPlanetLoaded)
        .catch(onError);
    }

    const { planet, loading, error } = state;

    const hasData = !(loading || error);
    const errorIndicator = error ? <ErrorIndicator/> : null;
    const loadingText = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;
    
    return (
        <div>
            {errorIndicator}
            {loadingText}
            {content}
        </div>
    );
}

export default RandomPlanet;