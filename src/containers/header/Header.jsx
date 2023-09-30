import React from 'react';
import people from '../../assets/people.png';
import bf from '../../assets/bf.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Benefactars: Your Learning Companion</h1>
      <p>Please type in your Email Adress and Get Started to connect with the largest growing community of DBATU, Lonere you have already heard of known as Benefactars.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>900 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={bf} />
    </div>
  </div>
);

export default Header;