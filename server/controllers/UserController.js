const { User } = require("../models/UserModel");

const getUser = async (req, res) => {
  try {
    const response = await User.findAll();
    if (response.length < 0) {
      return res.status(404).json({ msg: "Tidak ada User" });
    }
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.findByPk(id);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { ...payload } = req.body;
    const response = await User.create({ ...payload });
    return res
      .status(201)
      .send({ msg: "Successfully Created User" + response });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" + error });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const { ...payload } = req.body;
    const { id } = req.params;
    console.log(id);
    const dataCheck = await User.findByPk(id);
    if (!dataCheck) return res.status(409).send({ msg: "Tidak ada data User" });
    const response = await User.update({ ...payload }, { where: { id: id } });
    return res
      .status(201)
      .send({ msg: "Successfully Updated User " + response });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" + error });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const dataCheck = await User.findByPk(id);
    if (!dataCheck) return res.status(404).send({ msg: "User not found" });
    const response = await User.destroy({ where: { id: id } });
    return res.status(200).send({ msg: `User ${response} Deleted` });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  UpdateUser,
  DeleteUser,
};
