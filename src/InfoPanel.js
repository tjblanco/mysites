import React from 'react';

export class InfoPanel extends React.Component {

    componentDidUpdate() {
        console.log('ok')

    }

    render(){
        return(
            <div>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}


export default InfoPanel