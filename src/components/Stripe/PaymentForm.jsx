import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { STRIPE_PAYMENT_URL } from "../../constants/stripeKey";
import "./Form.css";

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const { basketList } = useSelector((state) => state.basketReducer);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(STRIPE_PAYMENT_URL, {
          amount: calculateTotal() * 100,
          id,
        });
        console.log(response);
        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  const calculateTotal = () => {
    return basketList.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit} id="payment-form">
          <div className="FormRow">
            <CardElement id="payment-element"/>
          </div>
          <button id="payButton">Pay</button>
        </form>
      ) : (
        <div>
          <h2 style={{ color: "green" }}>Successful payment</h2>
        </div>
      )}
    </>
  );
}