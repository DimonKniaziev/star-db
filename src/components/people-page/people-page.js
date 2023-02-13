import React, {Component} from "react";
import PersonDetails from "../person-details";
import ItemList from "../item-list";
import ErrorIndicator from "../error-indicator/error-idicator";

export default class PeoplePage extends Component {
    state = {
        selectedPerson: null,
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        if(this.state.hasError) {
            return <ErrorIndicator />
        }
        
        return (
            <div>
                <ItemList onItemSelected={this.onPersonSelected} />
                <PersonDetails personId={this.state.selectedPerson} />
            </div>
        );
    }
}