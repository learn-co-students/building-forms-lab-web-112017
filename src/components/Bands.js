import React, { Component } from 'react';

class Bands extends Component {

  render(){
    let bands = this.props.store.getState().bands.map((b, index) => {
      return <li key={index}>{b}</li>
    })
    
    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;
