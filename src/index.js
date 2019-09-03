import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// for all pages
const keyIndex = 'wizindex';
const keyPage = 'wizpage';
const keyQuiz = 'wizquiz';
const pagesCandy = ['', 'Candy1', 'Candy2', 'Candy2a'];
const pagesKickoff = ['', 'Kickoff1', 'Kickoff2','Kickoff3', 'Kickoff4','Kickoff5'];

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
        <label>What kind of candy do you like most?</label>
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
        <label>What Candy bar size do you prefer?</label>
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
    <div>
      <label>
        Fun Size
        <input type="radio" name="candyShape" value="funsize"/>
      </label>
    </div>
    <p></p>
    <p>
      <label>Do you prefer candy with or without a filling?</label>
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

class Candy2a extends React.Component {
  render() {
    return (
      <div>
        <h2>Lets get to you know a bit!! </h2>
    <p></p>
        <div>
        <p>
          <label>
            Whats your name ?
            <p></p>
            <input type="text" id="name" placeholder="First Last"/>
          </label>
        </p>
        <p></p>
        <p>
          <label>What part of the world did you grow up in?</label>
        </p>
        <div>
          <label>
            Asia
            <input type="radio" name="location" value="apac"/>
          </label>
        </div>
        <div>
          <label>
            Europe
          </label>
          <input type="radio" name="location" value="eu"/>
        </div>
        <div>
          <label>
            North America
            <input type="radio" name="location" value="na"/>
          </label>
        </div>
        <div>
          <label>
            South America
            <input type="radio" name="location" value="sa"/>
          </label>
        </div>
        <div>
          <label>
            Africa
            <input type="radio" name="location" value="af"/>
          </label>
        </div>
        <div>
          <label>
            Australia
            <input type="radio" name="location" value="au"/>
          </label>
        </div>
        <p></p>

        <p>
          <label>Do you consider any dietary restrictions when purchasing candy? </label>
        </p>
        <div>
          <label>
            Yes
            <input type="radio" name="restrictions" value="yes"/>
          </label>
        </div>
        <div>
          <label>
            No
          <input type="radio" name="restrictions" value="no"/>
          </label>
        </div>
    <p></p>
        <p>
          <label>What kind of candy you like?</label>
        </p>
        <div>
          <label>
            White
            <input type="radio" name="shape" value="white"/>
          </label>
        </div>
        <div>
          <label>
            Milk
          <input type="radio" name="shape" value="milk"/>
          </label>
        </div>
        <div>
          <label>
            Dark
          <input type="radio" name="shape" value="dark"/>
          </label>
        </div>
        <div>
          <label>
            Gum
            <input type="radio" name="shape" value="gum"/>
          </label>
        </div>
        <div>
          <label>
            Hard
            <input type="radio" name="shape" value="hard"/>
          </label>
        </div>
    <p></p>
        <p>
          <label>Do you prefer a filling or unfilled?</label>
        </p>
        <div>
          <label>
            Unfilled
            <input type="radio" name="candyFilling" value="unfilled"/>
          </label>
        </div>
        <div>
          <label>
            marshmellow
            <input type="radio" name="candyFilling" value="marshmellow"/>
          </label>
        </div>
        <div>
          <label>
            nougat
            <input type="radio" name="candyFilling" value="nougat"/>
          </label>
        </div>
        <div>
          <label>
            peanut butter
            <input type="radio" name="candyFilling" value="peanutbutter"/>
          </label>
        </div>
        <div>
          <label>
            Other Filling
            <input type="radio" name="candyFilling" value="otherfilled"/>
          </label>
        </div>
    <p></p>
        <p>
          <label>Where do you typically purchase your candy ?</label>
        </p>
        <div>
          <label>
            Target/Walmart/Super stores
            <input type="radio" name="store" value="walmart"/>
          </label>
        </div>
        <div>
          <label>
            Candy Store
            <input type="radio" name="store" value="candystore"/>
          </label>
        </div>
        <div>
          <label>
            Amazon and other online stores
            <input type="radio" name="store" value="online"/>
          </label>
        </div>
    <p></p>
        <p>
          <label>How many candy do you eat weekly ?</label>
        </p>
        <div>
          <label>
            1          
            <input type="radio" name="count" value="1" />
          </label>
        </div>
        <div>
          <label>
            2
            <input type="radio" name="count" value="2" />
          </label>
        </div>
        <div>
          <label>
            3
            <input type="radio" name="count" value="3" />
          </label>
        </div>
        <div>
          <label>
            4
            <input type="radio" name="count" value="4" />
          </label>
        </div>
        <div>
          <label>
            5
            <input type="radio" name="count" value="5" />
          </label>
        </div>
    <p></p>
        <p>
          <label>Which of these candy textures is your favorite?</label>
        </p>
        <div>
          <label>
            Crunchy
            <input type="radio" name="type" value="crunchy" />
          </label>
        </div>
        <div>
          <label>
            Chewy
            <input type="radio" name="type" value="chewy" />
          </label>
        </div>
        <div>
          <label>
            Fluffy
            <input type="radio" name="type" value="fluffy" />
          </label>
        </div>
        <div>
          <label>
            Melty
            <input type="radio" name="type" value="melty" />
          </label>
        </div>
        <div>
          <label>
            Sticky
            <input type="radio" name="type" value="sticky" />
          </label>
        </div>
        <div>
          <label>
            None
            <input type="radio" name="type" value="none" />
          </label>
        </div>
    <p></p>
        <p>
          <label>How often do you buy candy ?</label>
        </p>
        <div>
          <label>
            Daily
            <input type="radio" name="lastBought" value="daily" />
          </label>
        </div>
        <div>
          <label>
            Weekly
            <input type="radio" name="lastBought" value="weekly" />
          </label>
        </div>
        <div>
          <label>
            Monthly
            <input type="radio" name="lastBought" value="monthly" />
          </label>
        </div>
        <div>
          <label>
            Around holidays
            <input type="radio" name="lastBought" value="holidays" />
          </label>
        </div>
    <p></p>
        <p>
          <label>What other candy do you buy on a regular basis?</label>
        </p>
        <div>
          <label>
            Skittles
            <input type="radio" name="regularBasis" value="skittles" />
          </label>
        </div>
        <div>
          <label>
            Jelly Belly's
            <input type="radio" name="regularBasis" value="jelly" />
          </label>
        </div>
        <div>
          <label>
            m&amp;m's
            <input type="radio" name="regularBasis" value="m&amp;m" />
          </label>
        </div>
        <div>
          <label>
            Belgian
            <input type="radio" name="regularBasis" value="belgian" />
          </label>
        </div>
        <div>
          <label>
            Candy with liquor
            <input type="radio" name="regularBasis" value="liquor" />
          </label>
        </div>
      <p></p>
        <p>
          <label>Do you prefer any of these to chocolate?</label>
        </p>
        <div>
          <label>
            double dipped peanuts
            <input type="radio" name="bulk" value="peanuts" />
          </label>
        </div>
        <div>
          <label>
            licorice
            <input type="radio" name="bulk" value="licorice" />
          </label>
        </div>
        <div>
          <label>
            gummy bears
            <input type="radio" name="bulk" value="gummy" />
          </label>
        </div>
        <div>
          <label>
            gumballs
            <input type="radio" name="bulk" value="gumballs" />
          </label>
        </div>
        <div>
          <label>
            sours
            <input type="radio" name="bulk" value="sours" />
          </label>
        </div>
        <div>
          <label>
            none
            <input type="radio" name="bulk" value="none" />
          </label>
        </div>
    <p></p>
        <p>
          <label>Do you more often buy cheap or expensive candy?</label>
        </p>
        <div>
          <label>
            Cheap
            <input type="radio" name="quality" value="cheap" />
          </label>
        </div>
        <div>
          <label>
            Moderate
            <input type="radio" name="quality" value="moderate" />
          </label>
        </div>
        <div>
          <label>
            Expensive
            <input type="radio" name="quality" value="expensive" />
          </label>
        </div>
        <div>
          <label>
            It depends how I feel
            <input type="radio" name="quality" value="varies" />
          </label>
        </div>
    <p></p>
        <p>
          <label>Are there any speciality candies you go out of your way to get?</label>
        </p>
        <div>
          <label>
            Yes
            <input type="radio" name="outOfYourWay" value="yes" />
          </label>
        </div>
        <div>
          <label>
            No
            <input type="radio" name="outOfYourWay" value="no" />
          </label>
        </div>
        <div>
          <label>
            Sometimes
            <input type="radio" name="outOfYourWay" value="sometimes" />
          </label>
        </div>
        <p></p>
        <p>
          <label>
            What candy do you like that we haven’t asked about?
            <p></p>
            <input type="text" id="name" placeholder="First Last"/>
          </label>
        </p>
        <p></p>
      </div>
    </div>
    );
  }
}

class Kickoff1 extends React.Component {
  render() {
    return (
      <div>
        <h2>NGO Identify</h2>
        <p>Who are you as an NGO ?</p>
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
        <h2>Software Automation</h2>
        <p>What can you gain with technology?</p>
        <div>
        </div>
      </div>
    );
  }
}

class Kickoff3 extends React.Component {
  render() {
    return (
      <div>
        <h2>BUSINESS VALUE</h2>
        <p>What new opportunities will you gain?</p>
        <div>
        </div>
      </div>
    );
  }
}

class Kickoff4 extends React.Component {
  render() {
    return (
      <div>
        <h2>TRUE COST OF OWNERSHIP</h2>
        <p>What are the anticipated costs of the software ownership?</p>
        <div>
        </div>
      </div>
    );
  }
}

class Kickoff5 extends React.Component {
  render() {
    return (
      <div>
        <h2>THANK YOU FOR VISITING THE LITTLE BOBBY TABLES PRESENTATION!!!</h2>
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

    if (this.state.page === 'Candy2a') {
      return(
        <Candy2a />
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

    if (this.state.page === 'Kickoff3') {
      return(
        <Kickoff3 />
      );
    }

    if (this.state.page === 'Kickoff4') {
      return(
        <Kickoff4 />
      );
    }

    if (this.state.page === 'Kickoff5') {
      return(
        <Kickoff5 />
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

        <div>
          <div id="content">{this.getContent()}</div>

          <br />          
          <button onClick={this.handleHome}>Start Over</button>
          <button onClick={this.handlePrevious}>Previous</button>
          <button onClick={this.handleNext}>Next</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
