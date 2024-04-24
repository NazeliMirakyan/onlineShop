import { useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../../../components/Stripe/PaymentForm";
import { STRIPE_PUBLIC_KEY } from "../../../constants/stripeKey";
import style from "./OrderDetails.module.css";

const OrderDetails = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const stripe = loadStripe(STRIPE_PUBLIC_KEY);
  const basketList = useSelector((state) => state.basketReducer.basketList);
  const itemQuantity = useSelector((state) => state.basketReducer.itemQuantity);
  const total = basketList.reduce((acc, sum) => acc + sum.quantity * sum.price, 0);

  const handleCheckout = () => {
    setShowPaymentForm(true);
  };

  return (
    <div className={style.order_container}>
      <h3>Order details</h3>
      {showPaymentForm && itemQuantity !== 0 ? (
        <Elements stripe={stripe}>
          <PaymentForm />
        </Elements>
      ) : (
        <>
          <div className={style.sum_part}>
            <div className={style.sum}>
              <p className={style.title}>Sum</p>
              <p className={style.amount}>{total} $</p>
            </div>
            <p className={style.delivery}>Free delivery on qualifying orders.</p>
          </div>
          <div className={style.sum_part}>
            <div className={style.sum}>
              <p className={style.title}>Total</p>
              <p className={style.amount}>{total} $</p>
            </div>
            <button
              className={style.button}
              onClick={handleCheckout}
              disabled={itemQuantity === 0}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderDetails;