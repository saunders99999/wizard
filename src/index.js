import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class QuizType extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onQuizChange(event);
  }

  render() {
    return (
      <div>
        <p>Select a Wizard Type</p>
        <div>
          <label>
            Candy
            <input 
              type="radio" 
              name="quiztype" 
              value="candy" 
              checked={this.props.quiztype === 'candy'}
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Kickoff
            <input 
              type="radio" 
              name="quiztype" 
              value="kickoff" 
              checked={this.props.quiztype === 'kickoff'}
              onChange={this.handleChange} />
          </label>
        </div>
      </div>
    );
  }
}

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiztype: '',
      value: ''
    };

    this.handleQuizType = this.handleQuizType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQuizType(event) {
    console.log('event value', event.target.value);
    this.setState({quiztype: event.target.value});
  }

  handleSubmit(event) {
    console.log('submit');
    event.preventDefault();
    // this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Wizard Demo</h1>
        <h2>The Wizard is a tool to help teams facilitate the right conversations</h2>

        <form onSubmit={this.handleSubmit}>
          <QuizType quiztype={this.state.quiztype}  
                    onQuizChange={this.handleQuizType} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <Wizard />,
  document.getElementById('root')
);