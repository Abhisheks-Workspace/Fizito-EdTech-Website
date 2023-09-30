import React from 'react';
import brain from '../../assets/brain.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={brain} alt="Ed_Revolution" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">We dare to <br /> revolutionize education are you on our side?</h1>
      <p>The idea of Benefactars is very unique and has never been thought of. There are many educational platforms which can provide you with various courses, but will never provide you with help in dealing with stress. We are a comprehensive package of skills and entertainment, so you will never get bored.</p>
      <h4>Register until it's too late.</h4>
    </div>
  </div>
);

export default Possibility;