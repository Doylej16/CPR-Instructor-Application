import React from 'react';
import News from './News';
import CourseList from './CourseList';
import Stripe from './Stripe';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the CPR Instructor Application</h1>
      <p>Learn life-saving skills and get certified today!</p>
      <News />
      <CourseList />
      <Stripe />
    </div>
  );
};

export default Home;
