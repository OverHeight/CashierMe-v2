const DetailPenjualan = require("../models/DetailPenjualanModel");
const Penjualan = require("../models/PenjualanModel");
const Produk = require("../models/ProdukModel");

const getDetailPenjualan = async (req, res) => {
  try {
    const response = await DetailPenjualan.findAll();
    if (response.length < 0) {
      return res.status(404).json({ msg: "Tidak ada DetailPenjualan" });
    }
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error.message });
  }
};

const getDetailPenjualanById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await DetailPenjualan.findByPk(id);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error.message });
  }
};

const createDetailPenjualan = async (req, res) => {
  try {
    const { ...payload } = req.body;

    const check1 = Penjualan.findByPk(payload.penjualanId);
    const check2 = Produk.findByPk(payload.produkId);

    if (!check1)
      return res.status(404).send({ msg: "No Penjualan Founded with this ID" });
    if (!check2)
      return res.status(404).send({ msg: "No Produk Founded with this ID" });

    const response = await DetailPenjualan.create({ ...payload });
    return res
      .status(201)
      .send({ msg: "Successfully Created DetailPenjualan" + response });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" + error });
  }
};

const UpdateDetailPenjualan = async (req, res) => {
  try {
    const { ...payload } = req.body;
    const { id } = req.params;
    console.log(id);
    const dataCheck = await DetailPenjualan.findByPk(id);
    if (!dataCheck)
      return res.status(409).send({ msg: "Tidak ada data DetailPenjualan" });
    const response = await DetailPenjualan.update(
      { ...payload },
      { where: { id: id } }
    );
    return res
      .status(201)
      .send({ msg: "Successfully Updated DetailPenjualan " + response });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" + error });
  }
};

const DeleteDetailPenjualan = async (req, res) => {
  try {
    const { id } = req.params;
    const dataCheck = await DetailPenjualan.findByPk(id);
    if (!dataCheck)
      return res.status(404).send({ msg: "DetailPenjualan not found" });
    const response = await DetailPenjualan.destroy({ where: { id: id } });
    return res.status(200).send({ msg: `DetailPenjualan ${response} Deleted` });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = {
  getDetailPenjualan,
  getDetailPenjualanById,
  createDetailPenjualan,
  UpdateDetailPenjualan,
  DeleteDetailPenjualan,
};
