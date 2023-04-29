import React, { useState } from 'react';
import CourseImage from './CourseImage';

function CourseGallery(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePreviousClick() {
    setCurrentIndex(currentIndex - 1);
  }

  function handleNextClick() {
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="course-gallery">
      <div className="course-images">
        {props.images.map((image, index) => (
          <CourseImage 
            key={index} 
            src={image.src} 
            alt={image.alt} 
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="course-navigation">
        {currentIndex > 0 && (
          <button onClick={handlePreviousClick}>
            &lt; Previous
          </button>
        )}
        {currentIndex < props.images.length - 1 && (
          <button onClick={handleNextClick}>
            Next &gt;
          </button>
        )}
      </div>
      <div className="certificate">
        {currentIndex === props.images.length - 1 && (
          <img src={props.images[currentIndex].certificate} alt="Certificate" />
        )}
      </div>
    </div>
  );
}

export default CourseGallery;
