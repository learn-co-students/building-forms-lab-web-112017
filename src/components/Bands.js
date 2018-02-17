import React, { Component } from 'react';

class Bands extends Component {
  handleBands = () => {
    return this.props.store.getState().bands.map((band, index) => {
      return <li key={index}>{band}</li>
    })
  }

  render(){

    return (
      <ul>
        {this.handleBands()}
      </ul>
    );
  }
};

export default Bands;
