require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.SECRET_KEY);

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;
const endpointSecret = process.env.ENDPOINT_SECRET;

mongoose.connect(DB_URL).then(() => {
  console.log("Database Connected...");
});

const indexRouter = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/create-checkout-session", async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body,
      mode: "payment",
      success_url: `${FRONTEND_URL}/checkout/success`,
      cancel_url: `${FRONTEND_URL}/checkout/failed`,
    });
    res.json({
      data: { url: session.url, paymentId: session.id },
      msg: "success",
    });
  } catch (e) {
    next(e);
  }
});

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        const async_payment_failed = event.data.object;
        break;
      case "checkout.session.async_payment_succeeded":
        const async_payment_succeeded = event.data.object;
        break;
      case "checkout.session.completed":
        const session_completed = event.data.object;

        break;
      case "checkout.session.expired":
        const session_expired = event.data.object;
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

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
