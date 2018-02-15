import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const myBands = this.props.store.getState().bands.map((band, index) => {return <li key={index} >{band}</li>})
    console.log(myBands)
    return (
      <ul>
      {myBands}
      </ul>
    );
  }
};

export default Bands;
