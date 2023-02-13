import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button/ingex";
import ErrorIndicator from "../error-indicator/error-idicator";
import PeoplePage from "../people-page/people-page";

import './app.css';

export default class App extends Component{
    state = {
        displayRandomPlanet: true,
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    toggleRandomPlanet = () => {
        const display = this.state.displayRandomPlanet;
        this.setState({
            displayRandomPlanet: !display
        });
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        const randomPlanetComponent = this.state.displayRandomPlanet ? <RandomPlanet /> : null;

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header />
                {randomPlanetComponent}
                <button onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
                <ErrorButton />
                <PeoplePage />
            </div>
        );
    }
};