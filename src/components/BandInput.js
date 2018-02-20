import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}></input>
          <button type='submit'></button>
        </form>
      </div>
    );
  }
};

export default BandInput;
