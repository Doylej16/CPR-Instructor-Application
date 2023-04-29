import React from 'react';

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
    <div>
      <h1>Available Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.name}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
            <p>Cost: {course.cost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
