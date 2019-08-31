import React from 'react';

import Intro from './templates/Intro';

class WelcolmHeader extends React.Component {
  render() {
    return (
      <div classname='header'>
        Welcolm to the Project Kickoff Wizard
      </div>
    );
  }
}

class WelcolmIntro extends React.Component {
  render() {
    return (
      <div classname='introtext'>
        <p>This wizard helps guide your initial conversation with the Non-Profit Organization</p>
        <p>Understanding their mission and needs will help you to build the right technological solution</p>
      </div>
    );
  }
}

class Welcolm extends React.Component {
  render() {
    return (
      <Intro header={<WelcolmHeader/>} intro={<WelcolmIntro/>} />
    );
  }
}

export default Welcolm