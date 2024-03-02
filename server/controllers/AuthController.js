const bcrypt = require("bcrypt");
const {
  validateLogin,
  User,
  validateRegister,
} = require("../models/UserModel");
const { generateToken } = require("../utils");

const login = async (req, res) => {
  try {
    console.log("trying to auth");
    const { error } = validateLogin(req.body);
    if (error)
      return res
        .status(500)
        .send({ message: "Internal Server Error", error: error });

    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) return res.status(404).send({ message: "User not found" });

    const payload = {
      username: req.body.username,
      password: req.body.password,
    };

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid password" });

    const token = generateToken(payload);
    const usId = user.id;

    const session = await User.findByPk(usId);
    if (!session) {
      await User.destroy({ where: { id: usId } });

      await User.create({
        username: req.body.username,
        password: user.password,
        token,
      });
    } else {
      user.token = token;
      await user.save();
    }

    return res
      .status(200)
      .header({
        "Content-Type": "application/json",
        authorization: `bearer${token}`,
        "User-Id": user.id,
      })
      .send({ message: "Logged in Successfully", authorization: token });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
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
