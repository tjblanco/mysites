import React from 'react'

class FoursquareApiComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            prevMarker: null,
            error: null,
            loaded: false,
            info: null
        }
    }

    componentDidUpdate() {

        // document.querySelector('.info').classList.toggle('show')
        if(this.props.marker != null){
            if(this.props.marker != this.state.prevMarker){
                const ll =  this.props.marker.get('position').lat() + ',' + this.props.marker.get('position').lng()
                const apiKey = 'DCF32O5F4DN0GVATDUWSXTB1JHDNPHHTU5B4ED2MCPFQRJBU';
                const client = 'R12ITUMGB3XSH03IIKLB0RYK23CYLAITKDBBMHZAGEQ445Z1';
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
                                prevMarker: this.props.marker,
                                isLoaded: true,
                                items: result.response.venues.filter((venue) => venue.name !== this.props.marker.get('title')).slice(0,4)
                            });
                            this.openWindow()
                        },
                        // Note: it's important to handle errors here
                        // instead of a catch() block so that we don't swallow
                        // exceptions from actual bugs in components.
                        (error) => {
                            this.setState({
                                prevMarker: null,
                                isLoaded: true,
                                error
                            });
                        }
                    )
            }
        }
    }
    closeWindow = () => {
        document.getElementsByClassName('info')[0].style.display = 'none'
        this.props.marker.setIcon({
            url: 'http://maps.google.com/mapfiles/marker.png'
        })
    }
    openWindow = () => {
        document.getElementsByClassName('info')[0].style.display = 'block'
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='info'>
                    <button className="close" onClick={() => this.closeWindow()}>Close
                    </button>
                    <h3>{this.props.marker.get('title')}</h3>
                    <p className="small">Near places:</p>
                    <ol>
                        {items.map(item => (
                            <li key={item.name}>
                                {item.name} ({item.categories.length ? item.categories[0].name : 'Unkown'})
                            </li>
                        ))}
                    </ol>
                </div>
            );
        }
    }
}

export default FoursquareApiComponent
