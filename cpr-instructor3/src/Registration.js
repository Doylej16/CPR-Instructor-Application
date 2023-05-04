import React from 'react';
import ClientForm from './ClientForm';

const Registration = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Registration Form</h1>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <ClientForm />
      </div>
    </div>
  );
};

export default Registration;
