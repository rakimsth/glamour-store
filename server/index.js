require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.SECRET_KEY);

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const endpointSecret = process.env.ENDPOINT_SECRET;

const Controller = require("./modules/orders/order.controller");

mongoose.connect(DB_URL).then(() => {
  console.log("Database Connected...");
});

const indexRouter = require("./routes");
const app = express();

app.use(cors());
app.use(express.static("public"));

app.post(
  "/api/v1/orders/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      console.log({ err });
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    // Handle the event
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        const async_payment_failed = event.data.object;
        await Controller.updatePaymentStatus(async_payment_failed);
        break;
      case "checkout.session.async_payment_succeeded":
        const async_payment_succeeded = event.data.object;
        await Controller.updatePaymentStatus(async_payment_succeeded);
        break;
      case "checkout.session.completed":
        const session_completed = event.data.object;
        await Controller.updatePaymentStatus(session_completed);
        break;
      case "checkout.session.expired":
        const session_expired = event.data.object;
        await Controller.updatePaymentStatus(session_expired);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    response.json({ received: true });
  }
);

app.use(express.json());
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  const errMsg = err
    ? err.toString().split("Error: ")[1]
    : "Something Went Wrong...";
  res.status(500).json({ data: "", msg: errMsg });
});

app.listen(PORT, () => {
  console.log(`APP running on port ${PORT}`);
});
