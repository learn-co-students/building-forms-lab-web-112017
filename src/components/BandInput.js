import React, { Component } from 'react';

class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>add band</label>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
