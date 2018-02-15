import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ""
  }
  
  handleInputChange = (event) => {
    this.setState({text: event.target.value})
  }
  
  handleBandSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type: "ADD_BAND", band: this.state.text})
    this.setState({text: ""})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleBandSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleInputChange} placeholder="Band Name" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
};

export default BandInput;
