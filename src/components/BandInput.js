import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ''
  }
  
  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state 
    })
  }
  
  render() {
    return (
      <div onSubmit={(event) => this.handleSubmit(event)}>
        <form>
          <label>Band Name: </label>
          <input onChange={(event) => this.handleChange(event)} type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
