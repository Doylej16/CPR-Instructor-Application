import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      console.log(paymentMethod);
    }
  };

  const handleCardChange = (event) => {
    setCardComplete(event.complete);
    setError(event.error ? event.error.message : null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Card details
          <CardElement onChange={handleCardChange} />
        </label>
      </div>
      {error && <div className="error">{error}</div>}
      <button
        type="submit"
        disabled={processing || !stripe || !cardComplete}
      >
        {processing ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default PaymentForm;
