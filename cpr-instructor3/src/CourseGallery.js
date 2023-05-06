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
    <div className="flex flex-col items-center">
      <div className="flex justify-center space-x-4">
        {props.images.map((image, index) => (
          <CourseImage 
            key={index} 
            src={image.src} 
            alt={image.alt} 
            onClick={() => setCurrentIndex(index)}
            className={currentIndex === index ? 'border-2 border-blue-500' : ''}
          />
        ))}
      </div>
      <div className="flex justify-center my-4 space-x-4">
        {currentIndex > 0 && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePreviousClick}>
            &lt; Previous
          </button>
        )}
        {currentIndex < props.images.length - 1 && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNextClick}>
            Next &gt;
          </button>
        )}
      </div>
      <div className="flex justify-center">
        {currentIndex === props.images.length - 1 && (
           <img src={process.env.PUBLIC_URL + "/Certificate.jpg"} alt="Certificate" className="max-w-full" />
        )}
      </div>
    </div>
  );
}

export default CourseGallery;

