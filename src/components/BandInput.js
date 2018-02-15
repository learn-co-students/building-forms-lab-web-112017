import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    text: ''
  }
  //we have access to store dispatch through 'store' as a prop.
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });
    this.setState({
      text: ''
    })
  }

  handleChange = (event) => {
    console.log('event target', event.target.value)
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default BandInput;
