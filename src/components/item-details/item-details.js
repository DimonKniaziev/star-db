import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";

const Record = ({item, field, label}) => {
    return (
        <li>
            <span>{`${label} ${item[field]}`}</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null,
        image: null,
        loading: false
    };

    componentDidMount() {
       this.updateItem(); 
    }
    
    componentDidUpdate(prevProps) {
        if(this.props !== prevProps || this.props.getData !== prevProps.getData || this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem();
        }
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            image: this.props.getImageUrl(item),
            loading: false
        });
    };

    updateItem () {
        const {itemId, getData} = this.props;
        if(!itemId) {
            return;
        }
        this.setState({
            loading: true
        });
        getData(itemId)
            .then(this.onItemLoaded);
        
    }

    render() {
        const {item, image, loading} = this.state;

        const noData = !(item || loading)
        
        if(noData) {
            return <span>Select a Character</span>
        }

        if(this.state.loading) {
            return <h4>LOADING...</h4>
        }

        const {name} = item;

        return(
            <div>
                <img src={image} alt="Character"/>
                <h4>{name}</h4>
                <ul>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
                <ErrorButton />
            </div>
        );
    }
};