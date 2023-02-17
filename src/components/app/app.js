import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator/error-idicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider} from "../swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";

import './app.css';

export default class App extends Component{
    state = {
        displayRandomPlanet: true,
        hasError: false,
        swapiService: new SwapiService()
   };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    };

    onServiceChange = () => {
        const Service = this.state.swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

        console.log('switched to ' + Service.name);

        this.setState({
            swapiService: new Service()
        });
    };

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
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Header onServiceChange={this.onServiceChange}/>
                    {randomPlanetComponent}
                    <button onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <PeoplePage/>
                    <PlanetsPage/>
                    <StarshipsPage/>
                    
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};