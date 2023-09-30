import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Benefactars?" text="Benefactars is your personal Learning Companion, an initiative by students of Dr. Babasaheb Ambedkar Technological University, Lonere to help each and every student cope up with their academic curriculam and helping them in developing new technical skills." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The services we provide are beyond your Imagination</h1>
      <p>Explore our Services</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Study Material" text="We provide the best and relevant Study Material, double checked and verified by the toppers to make your work easier. " />
      <Feature title="Webinars" text="We also provide Webinars on various technical topics that can help you in your future and will also increase your area of interests." />
      <Feature title="Customer Support" text="We provide valuable customer support regarding queries and doubts related to the University between 9 AM to 5 PM IST. You can Mail us all the Queries and your doubts on benefactars@gmail.com." />
    </div>
  </div>
);

export default WhatGPT3;