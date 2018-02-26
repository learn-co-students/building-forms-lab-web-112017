import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  newBandListener = (event) => {
    
    this.setState({
      text: event.target.value
    })
  }

  handleNewBandSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });
      this.setState({
        text: '',
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewBandSubmit}>
          <input type="text" value={this.state.text} onChange={this.newBandListener} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
