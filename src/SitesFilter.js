import React from 'react';

export default class SitesFilter extends React.Component {
  render() {
    return (

        <div>
            <h2 className="small">Select Cousine Type</h2>
            <select onChange={(e) => {this.props.changeFilter(e.target.value)}} >
                {this.props.classes.map((c) => (<option value={c}>{c}</option>))}
            </select>
        </div>


      // <div className="col-sm-2">
      // <input type="checkbox"
      //          className="toggle"
      //          id={this.props.id}
      //          defaultChecked={this.props.inuse}
      //          onClick={() => this.props.changeFilter(this.props.id)}/>
      //        &nbsp;
      //        <label ref="text">{this.props.id}</label>
      //  </div>
      )
  }
}
