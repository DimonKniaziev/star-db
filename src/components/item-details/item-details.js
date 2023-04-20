import React, {Component} from "react";
import ErrorButton from "../error-button/error-button";
import Spinner from "../spinner";
import "./item-details.scss";

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
    state = {
        item: null,
        image: null,
        loading: false,
        error: false
    };

    componentDidCatch() {
        this.setState({
            loading: false,
            error: true
        });
    }

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
            return (
                <div className="item-details">
                    <h4>Select an Item</h4>
                </div>
            );
        }

        if(this.state.loading) {
            return (
                <div className="item-details">
                    <Spinner/>
                </div>
            );
        }

        if(this.state.error) {
            return (
                <div className="item-details">
                    <Spinner/>
                </div>
            )
        }

        const {name} = item;

        return(
            <div className="item-details">
                <div className="image-container">
                    <img src={image} alt=""/>
                </div>
                <div>
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
            </div>
        );
    }
};