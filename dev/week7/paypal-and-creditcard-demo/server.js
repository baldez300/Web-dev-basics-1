// server.js
const express = require("express");
const stripe = require("stripe")("your_stripe_secret_key");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
  });

  res.json({ clientSecret: paymentIntent.client_secret });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
