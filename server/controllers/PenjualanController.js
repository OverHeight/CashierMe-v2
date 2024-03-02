const Penjualan = require("../models/PenjualanModel");

const getPenjualan = async (req, res) => {
  try {
    const response = await Penjualan.findAll();
    if (response.length > 0) {
      return res.status(404).json({ msg: "Tidak ada Penjualan" });
    }
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error.message });
  }
};

const getPenjualanById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Penjualan.findByPk(id);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error.message });
  }
};

const createPenjualan = async (req, res) => {
  try {
    const { ...payload } = req.body;
    const check = req.body.PelangganId;
    if (!check)
      return res.status(404).send({ msg: "No Pelanggan Founded with this ID" });
    const response = await Penjualan.create({ ...payload });
    return res
      .status(201)
      .send({ msg: "Successfully Created Penjualan" + response });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" + error });
  }
};

const UpdatePenjualan = async (req, res) => {
  try {
    const { ...payload } = req.body;
    const { id } = req.params;
    console.log(id);
    const dataCheck = await Penjualan.findByPk(id);
    if (!dataCheck)
      return res.status(409).send({ msg: "Tidak ada data Penjualan" });
    const response = await Penjualan.update(
      { ...payload },
      { where: { id: id } }
    );
    return res
      .status(201)
      .send({ msg: "Successfully Updated Penjualan " + response });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" + error });
  }
};

const DeletePenjualan = async (req, res) => {
  try {
    const { id } = req.params;
    const dataCheck = await Penjualan.findByPk(id);
    if (!dataCheck) return res.status(404).send({ msg: "Penjualan not found" });
    const response = await Penjualan.destroy({ where: { id: id } });
    return res.status(200).send({ msg: `Penjualan ${response} Deleted` });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = {
  getPenjualan,
  getPenjualanById,
  createPenjualan,
  UpdatePenjualan,
  DeletePenjualan,
};
