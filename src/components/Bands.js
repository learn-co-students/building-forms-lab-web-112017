import React, { Component } from 'react';

class Bands extends Component {
  
  
  render(){
    
    const bandsArray = this.props.store.getState().bands.map(b => <li key={b}> {b} </li>)
    return (
      <div>
        <ul>
          { bandsArray }
        </ul>
      </div>
    );
  }
};

export default Bands;
