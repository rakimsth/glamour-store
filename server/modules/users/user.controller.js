const bcrypt = require("bcrypt");
const saltRounds = 10;
const Model = require("./user.model");

const create = async (payload) => {
  const { password, ...rest } = payload;
  rest.password = await bcrypt.hash(password, saltRounds);
  return Model.create(rest);
};
const login = async (email, password) => {
  const userExist = await Model.findOne({ email });
  if (!userExist) throw new Error("User not found");
  const result = await bcrypt.compare(password, userExist?.password);
  if (!result) throw new Error("Email or Password is invalid");
  return result;
};

module.exports = { create, login };
