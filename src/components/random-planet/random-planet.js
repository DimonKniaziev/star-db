import React, {Component} from "react";
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi-service.js';
import ErrorIndicator from "../error-indicator/error-idicator.js";
import Spinner from "../spinner/spinner.js";

import './random-planet.css';

export default class RandomPlanet extends Component {
    static defaultProps = {
        updateInterval: 35000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = (err) => {
        this.setState({
            loading: false,
            error: true
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*17 + 3);
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    }

    render() {
        const { planet, loading, error } = this.state;

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
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotation, diameter} = planet;

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}