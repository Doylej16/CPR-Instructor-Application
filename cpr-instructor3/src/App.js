import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CourseGallery from './CourseGallery';
import Navbar from './Navbar';
import './App.css';
import Registration from './Registration';
import PaymentForm from './Stripe';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('51N2HfXFlfEyi28JnyHMGgpD55HJhn5a77JfrqsvEc2IYmbdMNljkfvb97ywRBZojc0jOPxmOC4mP0FAG1NwijODg00O57YLvii');

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
          <Route path="/Registration" element={<Registration />} />
          <Route
            path="/Stripe"
            element={
              <Elements stripe={stripePromise}>
                <PaymentForm />
              </Elements>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
