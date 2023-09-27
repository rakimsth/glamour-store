const { Schema, model } = require("mongoose");
const commonSchema = require("../../utils/commonSchema");

const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const userSchema = new Schema({
  name: { type: String, required: "Full name is required" },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  isEmailVerified: { type: Boolean, default: false },
  password: {
    type: String,
    required: true,
    select: false,
  },
  roles: { type: Array, default: ["user"], required: true },
  isActive: { type: Boolean, default: true, required: true },
  image: { type: String },
  ...commonSchema,
});

module.exports = model("User", userSchema);
