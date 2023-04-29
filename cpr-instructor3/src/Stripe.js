import React, { useState } from 'react';
import Stripe from 'stripe';

const stripe = new Stripe('51N2HfXFlfEyi28JnyHMGgpD55HJhn5a77JfrqsvEc2IYmbdMNljkfvb97ywRBZojc0jOPxmOC4mP0FAG1NwijODg00O57YLvii', { apiVersion: '2020-08-27' });

const Payment = () => {
  const [paymentResult, setPaymentResult] = useState(null);

  const handlePayment = async () => {
    try {
      const token = await stripe.tokens.create({
        card: {
          number: '4242424242424242',
          exp_month: 12,
          exp_year: 2023,
          cvc: '123',
        },
      });

      const charge = await stripe.charges.create({
        amount: 1000,
        currency: 'usd',
        description: 'Example Charge',
        source: token.id,
      });

      setPaymentResult(charge);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Payment System</h2>
      <button onClick={handlePayment}>Make a Payment</button>
      {paymentResult && (
        <p>
          Payment Successful! Charge ID: {paymentResult.id} Amount: {paymentResult.amount}
        </p>
      )}
    </div>
  );
};

export default Payment;
