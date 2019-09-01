import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Welcolm from './Welcolm.js';

class Welcolm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Wizard',
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Wizard Demo</h1>
        <h2>The Wizard is a tool to help teams facilitate the right conversations</h2>
        <br />
        <p>Select the Wizard Type</p>
        <div>
          <input type="radio" id="huey" name="drone" value="huey"
                checked>
          <label for="huey">Huey</label>
        </div>
        <div>
          <input type="radio" id="dewey" name="drone" value="dewey">
          <label for="dewey">Dewey</label>
        </div>
      </div>
    );
  }
}


class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Wizard',
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Wizard Demo</h1>
        <h2>The Wizard is a tool to help teams facilitate the right conversations</h2>
        <br />
        <input type="text" value="Candy" onChange={this.handleChange} />
        <input type="text" value="KickOff" onChange={this.handleChange} />
      </div>
    );
  }
}

ReactDOM.render(
  <Wizard />,
  document.getElementById('root')
);