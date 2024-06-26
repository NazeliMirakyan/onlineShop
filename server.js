const express = require("express");
const app = express();

require("dotenv").config();

const stripe = require("stripe")("sk_test_51P0PeWRtamceOIf2FLuFW6DRxIMz30oCHhJhAwPwNhWPnqZAH7joXD7kH7cJLOacjbUdG5VMTDXrVOVtTY9yZVPP00ufY7AOMD");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors("*"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/payment", async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      payment_method: id,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    console.log("Payment", payment);
    res.json({
      message: "payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "payment failed",
      success: false,
    });
  }
});

app.listen(4000, () => {
  console.log("server start on port 4000");
});