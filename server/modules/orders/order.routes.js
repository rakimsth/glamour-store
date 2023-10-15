const router = require("express").Router();
const stripe = require("stripe")(process.env.SECRET_KEY);
const Controller = require("./order.controller");
const secureAPI = require("../../utils/secure");

const FRONTEND_URL = process.env.FRONTEND_URL;

router.get("/", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const { limit, page, id } = req.query;
    const search = { id };
    const result = await Controller.list(limit, page, search);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await Controller.create(req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const result = await Controller.getById(req.params.id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", secureAPI(["admin"]), async (req, res, next) => {
  try {
    req.body.updated_by = req.currentUser;
    req.body.updated_at = new Date();
    const result = await Controller.updateById(req.params.id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const payload = { updated_at: new Date(), updated_by: req.currentUser };
    const result = await Controller.deleteById(req.params.id, payload);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const payload = {
      status: req.body.status,
      updated_at: new Date(),
      updated_by: req.currentUser,
    };
    const result = await Controller.approve(req.params.id, payload);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.post("/create-checkout-session", async (req, res, next) => {
  try {
    const after30mins = new Date();
    after30mins.setMinutes(after30mins.getMinutes() + 30);
    const session = await stripe.checkout.sessions.create({
      line_items: req.body,
      mode: "payment",
      success_url: `${FRONTEND_URL}/checkout/success`,
      cancel_url: `${FRONTEND_URL}/checkout/failed`,
      expires_at: after30mins,
    });
    res.json({
      data: { url: session.url, paymentId: session.id },
      msg: "success",
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
