import React, { Component } from 'react';
import BandInput from './BandInput'

class Bands extends Component {
  render(){
    return (
      <div>
        <ul>
          {this.props.store.getState().bands.map(band => <li key={band}>{band}</li>)}
        </ul>
      </div>
    );
  }
};

export default Bands;
