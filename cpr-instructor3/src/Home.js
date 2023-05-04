import React from 'react';
import './App.css';

import News from './News';
import CourseList from './CourseList';
import PaymentButton from './PaymentButton';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to the CPR Instructor Application</h1>
        <p className="text-lg text-center mb-8">Learn life-saving skills and get certified today!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-bold mb-4">Upcoming Courses</h2>
            <CourseList />
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-bold mb-4">Make a Payment</h2>
            <PaymentButton className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded" />
          </div>
        </div>
        <News />
      </div>
    </div>
  );
};

export default Home;
