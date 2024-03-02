const Pelanggan = require("../models/PelangganModel");

const getPelanggan = async (req, res) => {
  try {
    const response = await Pelanggan.findAll();
    if (response.length < 0) {
      return res.status(404).json({ msg: "Tidak ada pelanggan" });
    }
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error.message });
  }
};

const getPelangganById = async (req, res) => {
  try {
    const pelanggan = req.params.id;
    const response = await Pelanggan.findByPk(pelanggan);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error.message });
  }
};

const createPelanggan = async (req, res) => {
  try {
    const { ...payload } = req.body;
    console.log(payload);
    const dataCheck = await Pelanggan.findOne({
      where: {
        nomorTelepon: req.body.nomorTelepon,
      },
    });
    if (dataCheck) {
      return res.status(409).send({ msg: "Nomor telepon telah digunakan" });
    }
    const response = await Pelanggan.create({ ...payload });
    return res
      .status(201)
      .send({ msg: "Successfully Created Pelanggan" + response });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" + error });
  }
};

const UpdatePelanggan = async (req, res) => {
  try {
    const { ...payload } = req.body;
    const { id } = req.params;
    console.log(id);
    const dataCheck = await Pelanggan.findByPk(id);
    if (!dataCheck)
      return res.status(409).send({ msg: "Tidak ada data Pelanggan" });
    const response = await Pelanggan.update(
      { ...payload },
      { where: { id: id } }
    );
    return res
      .status(201)
      .send({ msg: "Successfully Updated Pelanggan " + response });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" + error });
  }
};

const DeletePelanggan = async (req, res) => {
  try {
    const { id } = req.params;
    const dataCheck = await Pelanggan.findByPk(id);
    if (!dataCheck) return res.status(404).send({ msg: "Pelanggan not found" });
    const response = await Pelanggan.destroy({ where: { id: id } });
    return res.status(200).send({ msg: `Pelanggan ${response} Deleted` });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = {
  getPelanggan,
  getPelangganById,
  createPelanggan,
  UpdatePelanggan,
  DeletePelanggan,
};
