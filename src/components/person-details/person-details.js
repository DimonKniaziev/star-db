import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";

export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        person: null,
        loading: false
    };

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.updatePerson();
        }
    }

    onPersonLoaded = (person) => {
        this.setState({
            person,
            loading: false
        });
    };

    updatePerson () {
        const {personId} = this.props;
        if(!personId) {
            return;
        }
       this.setState({
        loading: true
       });
        this.swapiService.getPerson(personId)
            .then(this.onPersonLoaded);
        
    }

    render() {
        if(!this.state.person) {
            return <span>Select a Character</span>
        }

        if(this.state.loading) {
            return <h4>LOADING...</h4>
        }

        const {person: {id, name, gender, birthYear, eyeColor}} = this.state;

        return(
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="Character"/>
                <h4>{name}</h4>
                <ul>
                    <li>
                        <span>{gender}</span>
                    </li>
                    <li>
                        <span>{birthYear}</span>
                    </li>
                    <li>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
                <ErrorButton />
            </div>
        );
    }
}