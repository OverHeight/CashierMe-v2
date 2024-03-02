const { User } = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  console.log(payload);
  return jwt.sign(payload, process.env.JWTPRIVATEKEY, { expiresIn: "1h" });
};

const checkAuth = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).send({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).send({ message: "Invalid Token" });
  }
};

module.exports = { generateToken, checkAuth };
