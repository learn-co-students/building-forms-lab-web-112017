import React, { Component } from 'react';

class Bands extends Component {
  render(){
    console.log(this.props)
    return (
      <div>
        {this.props.store.getState().bands.map( (b) => <li>{b}</li>)}
      </div>
    );
  }
};

export default Bands;
