const router = require("express").Router();
const Controller = require("./user.controller");
const secureAPI = require("../../utils/secure");

router.post("/", secureAPI(["admin"]), async (req, res, next) => {
  try {
    req.body.created_by = req.currentUser;
    req.body.updated_by = req.currentUser;
    const result = await Controller.create(req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.get("/", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const result = await Controller.list();
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.get("/profile", secureAPI(["admin", "user"]), async (req, res, next) => {
  try {
    const me = req.currentUser;
    const result = await Controller.getById(me);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.put("/profile", secureAPI(["admin", "user"]), async (req, res, next) => {
  try {
    const me = req.currentRoles.includes("admin")
      ? req.body.id
      : req.currentUser;
    const result = await Controller.updateById(me, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.put("/change-password", secureAPI(["user"]), async (req, res, next) => {
  try {
    const me = req.currentUser;
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) throw new Error("Passwords are missing");
    const result = await Controller.changePassword(
      me,
      oldPassword,
      newPassword
    );
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.put("/reset-password", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const { id, ...rest } = req.body;
    const me = id;
    const result = await Controller.resetPassword(me, rest);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.patch("/status/:id", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const me = req.params.id;
    const result = await Controller.block(me, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const me = req.params.id;
    const result = await Controller.archive(me, req.body);
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

module.exports = router;
