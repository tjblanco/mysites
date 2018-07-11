import React from 'react'

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

        const ll =  this.props.latlng;
        const apiKey = 'UA5QGQ1JTYZHSWEOSHBRZLWGSC11ZQSZEUQSPMNRB2CLWUNR';
        const client = 'MAUHT20YAPLMM4UKVLWHBDNGDHKLCD1LTG0XDEKHH0YJ2XVG';
        const v = '20180711';
        const URL = 'https://api.foursquare.com/v2/venues/search';


        const url = () => {
            let url = URL;
            let params = {
                client_id: client,
                client_secret: apiKey,
                v: v
            }

            let paramStr = Object.keys(params)
                .filter(k => !!params[k])
                .map(k => `${k}=${params[k]}`).join('&');

            return `${url}?ll=${ll}&${paramStr}`;
        }


        fetch(url())
            .then(res => res.json())
            .then(

                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.response.venues.slice(0,5)
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
                            {item.name} {item.location.formattedAddress}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default FoursquareApiComponent
