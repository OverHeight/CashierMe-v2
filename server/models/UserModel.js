const { DataTypes } = require("sequelize");
const db = require("../config/Database");
const Joi = require("joi");

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { len: [8, 16] },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: DataTypes.BOOLEAN,
    token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

const validateRegister = (data) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(8).max(16).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    isAdmin: Joi.boolean().default(false),
  });
  return schema.validate(data);
};

const validateLogin = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { User, validateLogin, validateRegister };
