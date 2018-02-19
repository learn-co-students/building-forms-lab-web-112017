import React, { Component } from 'react';
import ManageBand from '../reducers/manageBand'

class BandInput extends Component {
  constructor(props){
    super(props)
    this.state = {text: ''}
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.text} onChange={this.textChange} />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }

  textChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });
    this.setState({
      text: '',
    });
  }
};

export default BandInput;
