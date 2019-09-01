import React from 'react';

class WizardType extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onQuizChange(e.target.value);
  }

  render() {
    const candy = this.props.candy;
    const kickoff = this.props.kickoff;
    return (
      <p>Select a Wizard Type</p>
      <input type="text" value="Candy" onChange={this.handleChange} />
      <input type="text" value="KickOff" onChange={this.handleChange} />
      {/* <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset> */}
    );
  }
}


          <WizardType
            candy=this.state.candy
            kickoff=this.state.kickoff
            onTemperatureChange={this.handleCelsiusChange} />

class Welcolm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candy: false,
      kickoff: false,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCandy = this.handleCandy.bind(this);
    this.handleKickoff = this.handleKickoff.bind(this);
  }

  handleCandy(event) {
    this.setState({value: event.target.value});
  }

  handleKickoff(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Wizard Demo</h1>
        <h2>The Wizard is a tool to help teams facilitate the right conversations</h2>

        <form onSubmit={this.handleSubmit}>
          <WizardType 
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default Welcolm