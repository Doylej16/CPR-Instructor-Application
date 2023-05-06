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

const stripePromise = loadStripe('51N2HfXFlfEyi28JnxloQZvwcyiYTdIDRAuRTDKLkvYrekLsBKYWU431BAyrLb2LScT64um8SvqF8ShWfv8ve6ZSd00AQ0wblPT');

function App() {
  const images = [
    { src: 'cprImage1.jpg', alt: 'Image 1', certificate: 'certificate1.jpg' },
    { src: 'cprImage2.jpg', alt: 'Image 2', certificate: 'certificate2.jpg' },
    { src: 'Certificate.jpg', alt: 'Image 3', certificate: 'certificate3.jpg' },
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

