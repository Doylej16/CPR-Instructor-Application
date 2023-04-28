import React from 'react';

function CourseImage(props) {
  return (
    <img 
      src={props.src} 
      alt={props.alt} 
      className="course-image"
      onClick={props.onClick}
    />
  );
}

export default CourseImage;
