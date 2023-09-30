import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Make a difference in the lives of students',
    text: 'Our only vision is to help students face their studies with our help and achieve their objectives.',
  },
  {
    title: 'We got a back-up',
    text: 'We are always here to dispel your questions and doubts concerning the University or the studies.',
  },
  {
    title: 'We got an anti-depressive squad',
    text: 'Our team will always prioritize your concerns and will constantly bring something interesting to keep you energized.',
  },
  {
    title: 'Learning materials and notes',
    text: 'Whether being an additional study material or refined notes, we took care of everything.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">You are just one step away from achieving your goal. Connect with us to make your university life incredible.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;