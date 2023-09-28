const router = require("express").Router();
const multer = require("multer");
const secureAPI = require("../../utils/secure");
const Controller = require("./product.controller");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/products");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname.split(" ").join(""));
  },
});

const upload = multer({ storage: storage });

router.get("/", secureAPI([]), async (req, res, next) => {
  try {
    const { size, offset, name } = req.query;
    const search = { name };
    const result = await Controller.list(size, offset, search);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.post(
  "/",
  secureAPI(["admin"]),
  upload.array("images", 4),
  async (req, res, next) => {
    try {
      if (req.files) {
        req.body.images = [];
        req.files.map((file) => {
          req.body.images.push("products/".concat(file.filename));
        });
      }
      const search = { name };
      const result = await Controller.list(size, offset, search);
      res.json({ data: result, msg: "success" });
    } catch (e) {
      next(e);
    }
  }
);

router.get("/:id", secureAPI([]), async (req, res, next) => {
  try {
    const result = await Controller.getById(req.params.id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.put(
  "/:id",
  secureAPI(["admin"]),
  upload.array("images", 4),
  async (req, res, next) => {
    try {
      if (req.files) {
        req.body.images = [];
        req.files.map((file) => {
          req.body.images.push("products/".concat(file.filename));
        });
      }
      const result = await Controller.updateById(req.params.id, req.body);
      res.json({ data: result, msg: "success" });
    } catch (e) {
      next(e);
    }
  }
);

router.delete("/", secureAPI(["admin"]), async (req, res, next) => {
  try {
    req.body.updated_by = req.currentUser;
    const result = await Controller.deleteById(req.params.id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
