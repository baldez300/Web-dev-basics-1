import React, { useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import PayPalButton from "react-paypal-button";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./PaymentMethod.css";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [stripeSecret, setStripeSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const handlePaymentSuccess = (paymentDetails) => {
    console.log("Payment successful:", paymentDetails);
    // Add your logic here for handling successful payment
  };

  const handleStripePayment = async () => {
    const result = await stripe.confirmCardPayment(stripeSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      handlePaymentSuccess(result.paymentIntent);
    }
  };

  const handleStripeSetup = async () => {
    const response = await axios.post("http://localhost:3001/create-payment-intent", {
      amount: 1000, // Specify the amount in cents
    });
    setStripeSecret(response.data.clientSecret);
  };

  return (
    <div className="payment-method-container">
      <div className="flex gap-10px margin-bottom-10px vertically-center underlined fit-content">
        <MdOutlinePayment size={30} />
        <h1 className="form-title margin-0">Payment</h1>
      </div>
      <div className="flex-column gap-10px">
        {/* PayPal button */}
        <PayPalButton amount={100} onSuccess={handlePaymentSuccess} />
      </div>
      <div className="flex-column">
        {/* Stripe credit card form */}
        <label className="flex gap-10px">
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={selectedMethod === "creditCard"}
            onChange={() => handleMethodChange("creditCard")}
          />
          <p>Credit Card</p>
        </label>
        <div>
          <CardElement />
          <button onClick={handleStripeSetup}>Setup Stripe</button>
          <button onClick={handleStripePayment}>Pay with Stripe</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
