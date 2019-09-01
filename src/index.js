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

class Candy1 extends React.Component {
  render() {
    return (
      <div>
        <p>You have selected: Snickers</p>
        <div>
        </div>
      </div>
    );
  }
}

class Kickoff1 extends React.Component {
  render() {
    return (
      <div>
        <p>You have selected: Snickers</p>
        <div>
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
      page: ''
    };

    this.getNextPage = this.getNextPage.bind(this);
    this.handleQuizType = this.handleQuizType.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleQuizType(event) {
    console.log('event value', event.target.value);
    this.setState({quiztype: event.target.value});
  }

  handleHome() {
    console.log('home');
    this.setState({page: 'home'});
  }

  handlePrevious() {
    console.log('previous');
    this.setState({page: 'candy1'});
  }

  handleNext() {
    console.log('next');
    this.setState({page: 'kickoff1'});
  }

  getNextPage() {
    console.log(this.state.page);
    if (this.state.page === 'candy1') {
      return (
        <Candy1 />
      );
    }

    if (this.state.page === 'kickoff1') {
      return (
        <Kickoff1 />
      );
    }

    // default
    // return (
    //   <QuizType quiztype={this.state.quiztype} 
    //     onQuizChange={this.handleQuizType} />
    // );
  }
  
  // if (this.state.page === 'candy1') {
  //   <Candy1 />
  // }
  
  // if (this.state.page === 'kickoff1') {
  //   <Kickoff1 />
  // }


  render() {


    return (
      <div className='wizard'>
        <h1>Wizard Demo</h1>
        <h2>The Wizard is a tool to help teams facilitate the right conversations</h2>

        <form>
          {this.getNextPage()}

          <br />          
          <button onClick={this.handleHome}>Home</button>
          <button onClick={this.handlePrevious}>Previous</button>
          <button onClick={this.handleNext}>Next</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <Wizard />,
  document.getElementById('root')
);