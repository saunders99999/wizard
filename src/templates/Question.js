import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <div className="question">
        <h2>{this.props.header}</h2>
        <p>{this.props.intro}</p>
        <form>

        </form>
      </div>
    )
  }
}

export default Question