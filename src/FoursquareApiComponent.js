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
            if(this.props.marker !== this.state.prevMarker){
                const ll =  this.props.marker.get('position').lat() + ',' + this.props.marker.get('position').lng()
                const apiKey = 'DCF32O5F4DN0GVATDUWSXTB1JHDNPHHTU5B4ED2MCPFQRJBU';
                const client = 'R12ITUMGB3XSH03IIKLB0RYK23CYLAITKDBBMHZAGEQ445Z1';
                const v = '20180712';
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
                            if(result.meta.code === 200){
                                this.openWindow()
                                this.setState({
                                    prevMarker: this.props.marker,
                                    isLoaded: true,
                                    items: result.response.venues.filter((venue) => venue.name !== this.props.marker.get('title')).slice(0,4)
                                });

                            }else{
                                this.openWindow()
                                this.setState({
                                    prevMarker: null,
                                    isLoaded: true,
                                    error: result.meta.errorDetail
                                });
                            }
                        },
                        // Note: it's important to handle errors here
                        // instead of a catch() block so that we don't swallow
                        // exceptions from actual bugs in components.
                        (error) => {
                            this.openWindow()
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
            return <div className='info'>
                <button className="close" onClick={() => this.closeWindow()}>Close</button>
                <p className="small">Sorry, we couldn't get the info. Error: {error.message ? error.message : error}</p>
            </div>;
        } else if (!isLoaded) {
            return <div className='info'>
                <button className="close" onClick={() => this.closeWindow()}>Close</button>
                <p className="small">Loading...</p>
            </div>;
        } else {
            return (
                <div className='info'>
                    <button className="close" onClick={() => this.closeWindow()}>Close
                    </button>
                    <h3>{this.props.marker.get('title')}</h3>
                    <p className="small">Near places from <a href='https://foursquare.com/' target="_blank">Foursquare</a>:</p>
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
