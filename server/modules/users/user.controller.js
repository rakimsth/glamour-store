const Model = require("./user.model");
const bcrypt = require("bcrypt");

const create = async (payload) => {
  const { password, ...rest } = payload;
  rest.password = await bcrypt.hash(password, +process.env.SALT_ROUND);
  return Model.create(rest);
};

const getById = (id) => {
  return Model.findOne({ _id: id });
};

const list = () => {
  return Model.find();
};

module.exports = { list, getById, create };
