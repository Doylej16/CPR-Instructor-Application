import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CourseGallery from './CourseGallery';
import Navbar from './Navbar';
import './App.css';

function App() {
  const images = [
    { src: 'image1.jpg', alt: 'Image 1', certificate: 'certificate1.jpg' },
    { src: 'image2.jpg', alt: 'Image 2', certificate: 'certificate2.jpg' },
    { src: 'image3.jpg', alt: 'Image 3', certificate: 'certificate3.jpg' },
  ];

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CourseGallery" element={<CourseGallery images={images} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

