import React, { PropTypes as T } from 'react'
import FoursquareApi from './utils/FoursquareApi'

class FoursquareApiComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            error: null,
            loaded: false,
            info: null
        }
    }

    componentDidMount() {
        var url = FoursquareApi({
            ll: this.props.latlng
        })
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default FoursquareApiComponent;
