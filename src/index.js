import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// for all pages
const keyIndex = 'wizindex';
const keyPage = 'wizpage';
const keyQuiz = 'wizquiz';
const pagesCandy = ['', 'Candy1', 'Candy2'];
const pagesKickoff = ['', 'Kickoff1', 'Kickoff2'];

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
              checked={this.props.quiz === 'candy'}
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
              checked={this.props.quiz === 'kickoff'}
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
    <p>
        <label>What kind of candy do you like?</label>
    </p>
    <div>
      <label>
        Milk
        <input type="radio" name="candyColor" value="milk"/>
      </label>
    </div>
    <div>
      <label>
        Sugar
        <input type="radio" name="candyColor" value="sugar"/>
      </label>
    </div>
    <div>
      <label>
        Dark
        <input type="radio" name="candyColor" value="dark"/>
      </label>
    </div>
    <p></p>
    <p>
        <label>Do you prefer Candy bar or Nugget type??</label>
    </p>
    <div>
      <label>
        Bar
        <input type="radio" name="candyShape" value="bar"/>
      </label>
    </div>
    <div>
      <label>
        Nuggets
        <input type="radio" name="candyShape" value="nuggets"/>
      </label>
    </div>
    <p></p>
    <p>
      <label>Do you prefer a filling or unfilled?</label>
    </p>
    <div>
      <label>
        Filled
        <input type="radio" name="candyFilling" value="filled"/>
      </label>
    </div>
    <div>
      <label>
        Unfilled
        <input type="radio" name="candyFilling" value="unfilled"/>
      </label>
    </div>
    <p></p>
    <p>
      <label>When you purchase candy which of the following is most important to you?</label>
    </p>
    <div>
        <label>
          Shape
          <input type="radio" name="candyPref" value="shape"/>
        </label>
    </div>
    <div>
      <label>
        Color
        <input type="radio" name="candyPref" value="color"/>
      </label>
    </div>
    <div>
      <label>
        Filling
        <input type="radio" name="candyPref" value="filling"/>
      </label>
    </div>
    <p></p>
</div>
    );
  }
}

class Candy2 extends React.Component {
  render() {
    return (
      <div>
        <p>You have selected: Candy Box #3</p>
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
        <p>You have selected: Kickoff1</p>
        <div>
        </div>
      </div>
    );
  }
}

class Kickoff2 extends React.Component {
  render() {
    return (
      <div>
        <p>You have selected: Kickoff2</p>
        <div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: localStorage.getItem( keyIndex ) || 0,
      page: localStorage.getItem( keyPage ) || '',
      quiz: localStorage.getItem( keyQuiz ) || 'candy'
    };

    this.getContent = this.getContent.bind(this);
    this.handleQuizType = this.handleQuizType.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.setPageIndex = this.setPageIndex.bind(this);
    this.setQuiz = this.setQuiz.bind(this);
  }

  handleQuizType(event) {
    console.log('event value', event.target.value);
    this.setQuiz(event.target.value);
  }

  getContent() {
    if (this.state.page === 'Candy1') {
      return(
        <Candy1 />
      );
    }

    if (this.state.page === 'Candy2') {
      return(
        <Candy2 />
      );
    }

    if (this.state.page === 'Kickoff1') {
      return(
        <Kickoff1 />
      );
    }

    if (this.state.page === 'Kickoff2') {
      return(
        <Kickoff2 />
      );
    }

    // default
    return (
      <QuizType quiz={this.state.quiz} 
        onQuizChange={this.handleQuizType} />
    );
  }

  // ---------------------- utility
  // haven't found the best way for React reseting state on page re-loads
  setQuiz(quiz) {
    console.log(`quiz: ${quiz}`);
    this.setState({quiz: quiz});
    localStorage.setItem(keyQuiz, quiz);
  }

  setPageIndex(index, page) {
    console.log(`index: ${index}, page: ${page}`);
    this.setState({index: index, page: page});
    localStorage.setItem(keyIndex, index);
    localStorage.setItem(keyPage, page);
  }

  // ---------------------- nav buttons 
  handleHome() {
    this.setPageIndex(0, pagesCandy[0]);
    this.setQuiz('');
  }

  handlePrevious() {
    if (this.state.quiz === 'candy' && this.state.index > 0) {
      const newIndex = Number(this.state.index) - 1;
      this.setPageIndex( newIndex, pagesCandy[newIndex]);
    }

    if (this.state.quiz === 'kickoff' && this.state.index > 0) {
      const newIndex = Number(this.state.index) - 1;
      this.setPageIndex( newIndex, pagesKickoff[newIndex]);
    }
  }

  handleNext() {
    if (this.state.quiz === 'candy' && this.state.index < (pagesCandy.length - 1)) {
      const newIndex = Number(this.state.index) + 1;
      this.setPageIndex( newIndex, pagesCandy[newIndex]);
    }

    if (this.state.quiz === 'kickoff' && this.state.index < (pagesKickoff.length - 1)) {
      const newIndex = Number(this.state.index) + 1;
      this.setPageIndex( newIndex, pagesKickoff[newIndex]);
    }
  }

  render() {
    // const content = <Content page={this.state.page} />;
    return (
      <div className='navpage'>
        <h1>Wizard Demo</h1>
        <h2>The Wizard is a tool to help teams facilitate the right conversations</h2>

        <form>
          <div id="content">{this.getContent()}</div>

          <br />          
          <button onClick={this.handleHome}>Start Over</button>
          <button onClick={this.handlePrevious}>Previous</button>
          <button onClick={this.handleNext}>Next</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
