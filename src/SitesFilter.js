import React from 'react';

export default class SitesFilter extends React.Component {
  render() {
    return (

        <div>
            <h2 className="small">Select Cousine Type</h2>
            <select onChange={(e) => {this.props.changeFilter(e.target.value)}} >
                {this.props.classes.map((c) => (<option value={c.get('id')}>{c.get('id')}</option>))}
            </select>
        </div>
      )
  }
}
