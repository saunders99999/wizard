import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// for all pages
const keyPage = 'wizpage';
const keyQuiz = 'wizquiz';
const pagesCandy = ['', 'candy1', 'candy2'];
const pagesKickoff = ['', 'kickoff1', 'kickoff2'];

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
        <p>You have selected: M&Ms</p>
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

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
    this.handleQuizType = this.handleQuizType.bind(this);
  }

  handleQuizType(event) {
    console.log('event value', event.target.value);
    this.setState({quiztype: event.target.value});
  }

  getContent() {
    console.log(this.props.page);

    if (this.props.page === 'candy1') {
      return (
        <Candy1 />
      );
    }

    if (this.props.page === 'kickoff1') {
      return (
        <Kickoff1 />
      );
    }

    // default
    return (
      <QuizType quiztype={this.state.quiztype} 
        onQuizChange={this.handleQuizType} />
    );
  }

  render() {
    return (
      <div className='content'>
          {this.getContent()}
      </div>
    );
  }
}

class NavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: localStorage.getItem( keyPage ) || '',
      quiz: localStorage.getItem( keyQuiz ) || 'candy'
    };

    this.handleHome = this.handleHome.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.setPage = this.setPage.bind(this);
    this.setQuiz = this.setQuiz.bind(this);
  }

  handleHome() {
    console.log('home');
    this.setQuiz('');
    this.setPage('');
  }

  handlePrevious() {
    console.log('previous');
    this.setPage('candy1');
  }

  handleNext() {
    console.log('next');
    this.setPage('kickoff1');
  }

  setQuiz(quiz) {
    this.setState({quiz: quiz});
    localStorage.setItem(keyQuiz, quiz);
  }

  setPage(page) {
    this.setState({page: page});
    localStorage.setItem(keyPage, page);
  }

  render() {
    const content = <Content page={this.state.page} />;
    return (
      <div className='navpage'>
        <h1>Wizard Demo</h1>
        <h2>The Wizard is a tool to help teams facilitate the right conversations</h2>

        <form>
          <div id="content">{content}</div>

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
  <NavPage />,
  document.getElementById('root')
);
