import React, {Component} from "react";
import AppRow from "../app-row";
import { PersonList, PersonDetails } from "../sw-components";

export default class PeoplePage extends Component {
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
                left={<PersonList onItemSelected={this.onItemSelected}/>}
                right={<PersonDetails itemId={this.state.selectedItem}/>}
            />
        );
    }
}