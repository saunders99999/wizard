import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <h2>{this.props.header}</h2>
        <p>{this.props.intro}</p>
      </div>
    )
  }
}

export default Intro