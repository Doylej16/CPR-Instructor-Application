import React from 'react';
import { Link } from 'react-router-dom';

const PaymentButton = () => {
  return (
    <Link to="/Stripe">
      <button>Make a Payment</button>
    </Link>
  );
};

export default PaymentButton;
