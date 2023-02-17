import React, {Component} from "react";
import AppRow from "../app-row";
import { PlanetList, PlanetDetails } from "../sw-components";

export default class PlanetsPage extends Component {
    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        });
    }

    render() {
        return (
            <AppRow 
                left={<PlanetList onItemSelected={this.onItemSelected}/>}
                right={<PlanetDetails itemId={this.state.selectedItem}/>}
            />
        );
    }
}