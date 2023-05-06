import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const courses = [
    {
      name: 'CPR and AED',
      description: 'Learn CPR and how to use an automated external defibrillator (AED) in this 4-hour course.',
      duration: '4 hours',
      cost: '$100'
    },
    {
      name: 'Basic Life Support (BLS)',
      description: 'This 6-hour course teaches basic life support skills for healthcare providers.',
      duration: '6 hours',
      cost: '$150'
    },
    {
      name: 'Advanced Cardiac Life Support (ACLS)',
      description: 'This 2-day course covers advanced cardiac life support skills for healthcare providers.',
      duration: '2 days',
      cost: '$400'
    }
  ];

  return (
    <div className="mt-16">
      <h1 className="text-2xl font-bold mb-8">Available Courses</h1>
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <li key={course.name} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-2">{course.name}</h2>
            <p className="text-gray-700 mb-2">{course.description}</p>
            <p className="text-gray-700 mb-2">Duration: {course.duration}</p>
            <p className="text-gray-700 mb-4">Cost: {course.cost}</p>
            <Link to="/Registration">
              <button className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full">
                Register Now
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
