import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// for all pages
// @TODO, fix keys to object
const keyCandy1 = 'wizcandy1';
const keyCandy2 = 'wizcandy2';
const keyIndex = 'wizindex';
const keyPage = 'wizpage';
const keyQuiz = 'wizquiz';
const pagesCandy = ['', 'Candy1a', 'Candy1b', 'Finish'];
const pagesCandy2 = ['', 'Candy2a', 'Candy2b', 'Candy2c', 'Finish'];
const pagesKickoff = ['', 'Kickoff1', 'Kickoff2','Kickoff3', 'Kickoff4','Finish'];

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
            Candy1
            <input 
              type="radio" 
              name="quiztype" 
              value="candy1" 
              checked={this.props.quiz === 'candy1'}
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Candy2
            <input 
              type="radio" 
              name="quiztype" 
              value="candy2" 
              checked={this.props.quiz === 'candy2'}
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Project Kickoff
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

class Candy1a extends React.Component {
  render() {
    return (
<div>
    <h2>Let's talk candy...</h2>
    <p>
        <label>Do you like candy?</label>
    </p>
    <div>
      <label>
        Yes
        <input type="radio" name="likeCandy" value="yes"/>
      </label>
    </div>
    <div>
      <label>
        No
        <input type="radio" name="likeCandy" value="no"/>
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
    <p>
        <label>What time of the day do you eat candy?</label>
    </p>
    <div>
      <label>
        Morning
        <input type="radio" name="candyTime" value="morning"/>
      </label>
    </div>
    <div>
      <label>
        Afternoon
        <input type="radio" name="candyTime" value="afternoon"/>
      </label>
    </div>
    <div>
      <label>
        Night
        <input type="radio" name="candyTime" value="night"/>
      </label>
    </div>
    <div>
      <label>
        Any Time!
        <input type="radio" name="candyTime" value="any"/>
      </label>
    </div>
    <p></p>
    <p>
      <label>What color wrapper do you like?</label>
    </p>
    <div>
      <label>
        Black
        <input type="radio" name="candyWrappers" value="black"/>
      </label>
    </div>
    <div>
      <label>
        Other colors
        <input type="radio" name="candyWrappers" value="other"/>
      </label>
    </div>
    <div>
      <label>
        White
        <input type="radio" name="candyWrappers" value="white"/>
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
</div>
    );
  }
}

class Candy1b extends React.Component {
  render() {
    return (
      <div>
        <h2>HAVE SOME CANDY!!!</h2>
        <p>{this.props.msg}</p>
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
        <h2>Lets get to you know a bit!!</h2>
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
          <label>How sweet is your sweet tooth?</label>
        </p>
        <div>
          <label>
            I consider candy one of the essential four food groups
            <input type="radio" name="sweetness" value="sweetmost"/>
          </label>
        </div>
        <div>
          <label>
            Dessert before dinner
          <input type="radio" name="sweetness" value="sweetsome"/>
          </label>
        </div>
        <div>
          <label>
            Candy is all right
          <input type="radio" name="sweetness" value="sweetlittle"/>
          </label>
        </div>
        <div>
          <label>
            I don’t eat much candy
            <input type="radio" name="sweetness" value="sweetno"/>
          </label>
        </div>
    <p></p>
        <p>
          <label>How many times do you eat candy in a week?</label>
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
            4+
            <input type="radio" name="count" value="4" />
          </label>
        </div>
    <p></p>
        <p>
          <label>
            What is your favorite candy of all time?
            <p></p>
            <input type="text" id="name" placeholder="the one you dream about..."/>
          </label>
        </p>
        <p></p>
      </div>
    </div>
    );
  }
}

class Candy2b extends React.Component {
  render() {
    return (
      <div>
      <h2>Candy Preferences</h2>
      <p></p>
        <p>
          <label>What kind of candy do you prefer?</label>
        </p>
        <div>
          <label>
            Chocolate
            <input type="radio" name="preference" value="chocolate" />
          </label>
        </div>
        <div>
          <label>
            Not Chocolate
            <input type="radio" name="preference" value="nonchocolate" />
          </label>
        </div>
        <div>
          <label>
            All
            <input type="radio" name="preference" value="all" />
          </label>
        </div>
      <p></p>
        <p>
          <label>Which of these candy textures is your favorite?</label>
        </p>
        <div>
          <label>
            Chewy
            <input type="radio" name="texture" value="chewy" />
          </label>
        </div>
        <div>
          <label>
            Smooth
            <input type="radio" name="texture" value="smooth" />
          </label>
        </div>
        <div>
          <label>
            Crunchy
            <input type="radio" name="texture" value="crunchy" />
          </label>
        </div>
        <div>
          <label>
            No Preference
            <input type="radio" name="texture" value="nopref" />
          </label>
        </div>
    <p></p>
        <p>
          <label>What kind of fillings do you prefer?</label>
        </p>
        <div>
          <label>
            Caramel
            <input type="radio" name="filling" value="caramel" />
          </label>
        </div>
        <div>
          <label>
            Toffee
            <input type="radio" name="filling" value="toffee" />
          </label>
        </div>
        <div>
          <label>
            Creamy
            <input type="radio" name="filling" value="creamy" />
          </label>
        </div>
        <div>
          <label>
            No Preference
            <input type="radio" name="filling" value="nopref" />
          </label>
        </div>
        <p></p>
        <p>
          <label>Which of these do you like as a chocolate alternative?</label>
        </p>
        <div>
          <label>
            Licorice (i.e. Twizzlers)
            <input type="radio" name="alt" value="licorice" />
          </label>
        </div>
        <div>
          <label>
            Gummy Bears
            <input type="radio" name="alt" value="gummy" />
          </label>
        </div>
        <div>
          <label>
            Gumballs
            <input type="radio" name="alt" value="gumballs" />
          </label>
        </div>
        <div>
          <label>
            Sours
            <input type="radio" name="alt" value="sours" />
          </label>
        </div>
        <div>
          <label>
            None
            <input type="radio" name="alt" value="none" />
          </label>
        </div>
      <p></p>
      </div>
    );
  }
}

class Candy2c extends React.Component {
  render() {
    return (
      <div>
        <h2>HAVE SOME CANDY!!!</h2>
        <p>{this.props.msg}</p>
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
      <h2>NGO Identify</h2>
      <h3>Who are you as an NGO ?</h3>
      <p>
          <label>
            Do you consider yourself a small, medium or large size business? 
            <p></p>
            <input type="text" id="name" placeholder="i.e. number of employees and overall revenue or client size"/>
          </label>
      </p>
      <p>
          <label>
            What defines you as an NGO?  
            <p></p>
            <input type="text" id="name" placeholder="Whats your mission?"/>
          </label>
      </p>
      <p>
          <label>
            What region(s) do you work in?   
            <p></p>
            <input type="text" id="name" placeholder="East coast/ West coast/ International etc."/>
          </label>
      </p>
      <p>
          <label>
            What are the key services you provide?    
            <p></p>
            <input type="text" id="name" placeholder="i.e. housing for underprivileged/education assistance/etc"/>
          </label>
      </p>        
      </div>
    );
  }
}

class Kickoff2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Software Automation</h2>
        <h3>What can you gain with technology?</h3>
        <p>
            <label>
              Name some business processes that can be made easier? 
              <p></p>
              <input type="text" id="name" placeholder="Are these repeatable? What users interact with these processes?"/>
            </label>
        </p>
        <p>
            <label>
              Name some spreadsheets or data you maintain that can be automated  
              <p></p>
              <input type="text" id="name" placeholder="Who uses these spreadsheets and how?"/>
            </label>
        </p>
        <p>
            <label>
              Who can benefit if these processes are automated?  
              <p></p>
              <input type="text" id="name" placeholder="Clients/Employees/etc"/>
            </label>
        </p>
      </div>
    );
  }
}

class Kickoff3 extends React.Component {
  render() {
    return (
      <div>
        <h2>BUSINESS VALUE</h2>
        <h3>What new opportunities will you gain?</h3>
        <p>
            <label>
              Describe briefly what would you like the new system to do? 
              <p></p>
              <input type="text" id="name" placeholder="collect contact info/payments/login etc"/>
            </label>
        </p>
        <p>
            <label>
              Overall, how is this good for business? 
              <p></p>
              <input type="text" id="name" placeholder="enhanced services, new business opportunities, cheaper costs…"/>
            </label>
        </p>
        <p>
            <label>
              Are there any metrics to consider the new functionality complete? 
              <p></p>
              <input type="text" id="name" placeholder="how will you know the effort is a success"/>
            </label>
        </p>
      </div>
    );
  }
}

class Kickoff4 extends React.Component {
  render() {
    return (
      <div>
        <h2>TRUE COST OF OWNERSHIP</h2>
        <h3>What are the anticipated costs of the software ownership?</h3>
        <p>
            <label>
              Should the tech team focus more initially towards budget or on functional flexibility? 
              <p></p>
              <input type="text" id="name" placeholder="often, features sound nice until the associated costs at hand-off are fully understood"/>
            </label>
        </p>
        <p>
            <label>
              Do you have a preferred software licensing model? 
              <p></p>
              <input type="text" id="name" placeholder="user based, monthly costs, one time purchase, support…"/>
            </label>
        </p>
        <p>
            <label>
              Comparing the purchase of technology to a car, what size of car is this purchase? 
              <p></p>
              <input type="text" id="name" placeholder="small/medium/large car/SUV/truck/minivan - why?"/>
            </label>
        </p>
      </div>
    );
  }
}

class Finish extends React.Component {
  render() {
    return (
      <div>
        <h2>THANK YOU FOR VISITING THE LITTLE BOBBY TABLES PRESENTATION!!!</h2>
        <h3>Enjoy the Conversation</h3>
      </div>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candy1msg: localStorage.getItem( keyCandy1 ) || '',
      candy2msg: localStorage.getItem( keyCandy2 ) || '',
      index: localStorage.getItem( keyIndex ) || 0,
      page: localStorage.getItem( keyPage ) || '',
      quiz: localStorage.getItem( keyQuiz ) || 'Candy1a'
    };

    this.getCandyChoice2 = this.getCandyChoice2.bind(this);
    this.getContent = this.getContent.bind(this);
    this.getRadioButtonValue = this.getRadioButtonValue.bind(this);
    this.handleQuizType = this.handleQuizType.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.setCandy1 = this.setCandy1.bind(this);
    this.setCandy2 = this.setCandy2.bind(this);
    this.setPageIndex = this.setPageIndex.bind(this);
    this.setQuiz = this.setQuiz.bind(this);
  }

  handleQuizType(event) {
    console.log('event value', event.target.value);
    this.setQuiz(event.target.value);
  }

  getContent() {
    if (this.state.page === 'Candy1a') {
      return(
        <Candy1a />
      );
    }

    if (this.state.page === 'Candy1b') {
      return(
        <Candy1b msg={this.state.candy1msg}/>
      );
    }

    if (this.state.page === 'Candy2a') {
      return(
        <Candy2a />
      );
    }

    if (this.state.page === 'Candy2b') {
      return(
        <Candy2b />
      );
    }

    if (this.state.page === 'Candy2c') {
      return(
        <Candy2c msg={this.state.candy2msg}/>
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

    if (this.state.page === 'Finish') {
      return(
        <Finish />
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
  // @TODO consolidate these methods
  setCandy1(msg) {
    this.setState({candy1msg: msg});
    localStorage.setItem(keyCandy1, msg);
  }

  setCandy2(msg) {
    this.setState({candy2msg: msg});
    localStorage.setItem(keyCandy2, msg);
  }

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
    this.setQuiz('candy1');
  }

  handlePrevious() {
    if (this.state.quiz === 'candy1' && this.state.index > 0) {
      const newIndex = Number(this.state.index) - 1;
      this.setPageIndex( newIndex, pagesCandy[newIndex]);
    }

    if (this.state.quiz === 'candy2' && this.state.index > 0) {
      const newIndex = Number(this.state.index) - 1;
      this.setPageIndex( newIndex, pagesCandy2[newIndex]);
    }

    if (this.state.quiz === 'kickoff' && this.state.index > 0) {
      const newIndex = Number(this.state.index) - 1;
      this.setPageIndex( newIndex, pagesKickoff[newIndex]);
    }
  }

  getRadioButtonValue(radioName) {
    const radios = document.getElementsByName(radioName);

    // @TODO do the better way
    // const result = inventory.find( fruit => fruit.name === 'cherries' );
    // console.log(result) // { name: 'cherries', quantity: 5 }
    let retValue = '';
    radios.forEach((element) => {
      if (element.checked) {
        retValue = element.value;
      }
    });
    return retValue;
  }

  // decisions Candy 1
  // no like candy -> NO CANDY

  // decisions Candy 2
  // not Chocolate -> brew pop -> box 3
  // no pref and no pref -> brew pop -> box 3
	// crunchy and toffee -> crunchie -> box 5
	// crunchy and not toffee -> fudge -> box 1
	// caramel -> mars -> box 2
	// smooth or creamy -> milky way -> box 4

  getCandyChoice2() {
    const pref = this.getRadioButtonValue('preference');
    const texture = this.getRadioButtonValue('texture');
    const filling = this.getRadioButtonValue('filling');

    if (pref === 'nonchocolate' || (filling === 'nopref' && texture === 'nopref') ) {
      // brew pops
      return 'ENJOY YOUR CANDY!!!  You have selected: Candy Box #3';
    }

    if (texture === 'crunchy' && filling === 'toffee') {
      // crunchy
      return 'ENJOY YOUR CANDY!!!  You have selected: Candy Box #5';
    }

    if (texture === 'crunchy') {
      // fudge
      return 'ENJOY YOUR CANDY!!!  You have selected: Candy Box #1';
    }

    if (filling === 'caramel') {
      // mars
      return 'ENJOY YOUR CANDY!!!  You have selected: Candy Box #2';
    }

    if (texture === 'smooth' || filling === 'creamy') {
      // milky way
      return 'ENJOY YOUR CANDY!!!  You have selected: Candy Box #4';
    }

    return 'Answer more to get a treat!!!';
  }

  handleNext() {
    if (this.state.quiz === 'candy1' && this.state.index < (pagesCandy.length - 1)) {      
      const newIndex = Number(this.state.index) + 1;
      if (this.state.index === 1) {
        if (this.getRadioButtonValue('likeCandy') === 'yes') {
          this.setCandy1('ENJOY YOUR CANDY!!!  You have selected: Candy Box #3');
        } else {
          this.setCandy1('No CANDY FOR YOU!!!');
        }
      }

      this.setPageIndex( newIndex, pagesCandy[newIndex]);
    }

    if (this.state.quiz === 'candy2' && this.state.index < (pagesCandy2.length - 1)) {
      const newIndex = Number(this.state.index) + 1;
      if (this.state.index === 2) {
        this.setCandy2( this.getCandyChoice2() );
      }

      this.setPageIndex( newIndex, pagesCandy2[newIndex]);
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
        <h2>The Wizard is a tool that helps teams facilitate the right conversations</h2>

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
