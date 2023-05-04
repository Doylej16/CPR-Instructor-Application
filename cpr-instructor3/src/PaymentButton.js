import React from 'react';
import { Link } from 'react-router-dom';

const PaymentButton = () => {
  return (
    <Link to="/Stripe">
      <button className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
        Make a Payment
      </button>
    </Link>
  );
};

export default PaymentButton;
