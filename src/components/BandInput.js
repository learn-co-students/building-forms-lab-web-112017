import React, { Component } from 'react';

class BandInput extends Component {
  
  state = {
    text: ""
  }
  
  handleInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({ 'type': 'ADD_BAND', 'band': this.state.text })
    this.setState({
      text: ""
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" onChange={(e) => this.handleInput(e)} value={this.state.text}></input>
        </form>
      </div>
    );
  }
};

export default BandInput;
