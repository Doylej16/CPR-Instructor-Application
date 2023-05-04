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
        <News />
        <CourseList />
        <PaymentButton />
      </div>

      <div className="bg-white">
        <div className="container mx-auto py-4 px-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
              <h2 className="text-2xl font-bold mb-2">About Us</h2>
              <p className="text-gray-700 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique ante eu massa mollis, at tincidunt nisl euismod. Ut convallis magna a justo lobortis, sed gravida mauris blandit.
              </p>
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
              <h2 className="text-2xl font-bold mb-2">Courses</h2>
              <ul className="list-disc list-inside">
                <li><a href="#" className="text-blue-500 hover:underline">Basic Life Support (BLS)</a></li>
                <li><a href="#" className="text-blue-500 hover:underline">Cardiopulmonary Resuscitation (CPR)</a></li>
                <li><a href="#" className="text-blue-500 hover:underline">First Aid</a></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3 px-2">
              <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
              <p className="text-gray-700 leading-loose">
                123 Main St<br />
                Anytown, USA 12345<br />
                <a href="tel:123-456-7890" className="text-blue-500 hover:underline">123-456-7890</a><br />
                <a href="mailto:info@cprinstructorapp.com" className="text-blue-500 hover:underline">info@cprinstructorapp.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
