import React, {Component} from "react";
import AppRow from "../app-row";
import { StarshipList, StarshipDetails } from "../sw-components";

export default class StarshipsPage extends Component {
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
                left={<StarshipList onItemSelected={this.onItemSelected}/>}
                right={<StarshipDetails itemId={this.state.selectedItem}/>}
            />
        );
    }
}