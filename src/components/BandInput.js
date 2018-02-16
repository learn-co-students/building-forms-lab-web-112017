import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ""
  }

  changeInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type: "ADD_BAND", band: this.state.text})
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" onChange={this.changeInput} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default BandInput;
