import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening,<br /> It might keep you in the loop.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 14, 2022" text="We are now registered with MSME and as of now will be fully operational." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 14, 2022" text="We are pleased to announce that we have begun our first batch and are getting a great response." />
        <Article imgUrl={blog03} date="Feb 26, 2022" text="An extraordinary webinar on career guidance took place. Did you attend the webinar?" />
        <Article imgUrl={blog04} date="Feb 26, 2022" text="We are pleased to announce that we are now incubated by Innovation, Invention and Enterprise (i2e) Council of Dr. Babasaheb Ambedkar Technological University Lonere." />
        <Article imgUrl={blog05} date="Feb 26, 2022" text="Thanks to the students for having shown enough love and support and joining our first Batch of 2022. We assure you that we are doing everything we can." />
      </div>
    </div>
  </div>
);

export default Blog;
