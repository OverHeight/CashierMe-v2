const bcrypt = require("bcrypt");
const {
  validateLogin,
  User,
  validateRegister,
} = require("../models/UserModel");
const { generateToken } = require("../utils");

const login = async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).send({ message: "Validation error", error: error });

    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) return res.status(404).send({ message: "User not found" });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).send({ message: "Invalid password" });

    const token = generateToken({ id: user.id, username: user.username });
    user.token = token;
    await user.save();

    return res
      .status(200)
      .header({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "X-User-Id": user.id,
      })
      .send({ message: "Logged in successfully", authorization: token });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error", error: error.message });
  }
};


const register = async (req, res) => {
  try {
    const { error } = validateRegister(req.body);
    if (error)
      return res
        .status(500)
        .send({ message: "Internal server error", error: error });

    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(user);
    if (user)
      return res
        .status(409)
        .send({ message: "Email has Already been Registered" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const response = await User.create({ ...req.body, password: hashPassword });
    return res
      .status(200)
      .send({ message: "User created successfully", details: response });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error creating user", details: error.message });
  }
};

module.exports = { login, register };
