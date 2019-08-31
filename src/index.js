import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Welcolm from './Welcolm.js';


// import Q1 from './q1.js';
// import Q2 from './q2.js';
// const questions = [
//   {id: "0", previous: 1, next: 1, question:"primer"},
//   {id: "1", previous: 1, next: 2, question:"What is the meaning of life?"},
//   {id: "2", previous: 1, next: 3, question:"What is my name?"},
//   {id: "3", previous: 2, next: 1, question:"Do you seek the grail?"}
// ];

class Wizard extends React.Component {
  constructor(props) {
    super(props);
  }
    // this.state = {current: questions[1]};

    // This binding is necessary to make `this` work in the callback
    // this.nextQuestion = this.nextQuestion.bind(this);
    // this.previousQuestion = this.previousQuestion.bind(this);

  render() {
    return (
      <div className="wizard">
        <h1>Project Kickoff</h1>
        <Welcolm />
        
      </div>
    );
  }
}

ReactDOM.render(
  <Wizard />,
  document.getElementById('root')
);
  // getQuestion(id) {
  //   return questions[id];
  // }

  // previousQuestion() {
  //   this.setState((state, props) => ({
  //     current: this.getQuestion(state.current.previous)
  //   }));
  // }

  // nextQuestion() {
  //   this.setState((state, props) => ({
  //     current: this.getQuestion(state.current.next)
  //   }));
  // }

  // render() {
  //   return (
  //     <div className="wizard">
  //       <h1>Wizard - Project Kickoff</h1>
  //       <div className="question">
  //         <p>question: {this.state.current.id}</p>
  //         <p>{this.state.current.question}</p>
  //       </div>
  //       <div className="answer">
  //         <textarea></textarea>
  //       </div>
  //       <div className="navigation">
  //         <button onClick={this.previousQuestion}>
  //           Previous
  //         </button>

  //         <button onClick={this.nextQuestion}>
  //           Next
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }



