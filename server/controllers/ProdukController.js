const multer = require("multer");
const Produk = require("../models/ProdukModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images"); // Directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Filename for uploaded files
  },
});
const upload = multer({ storage: storage }).single("image"); // Single file upload with field name 'image'

const getProduk = async (req, res) => {
  try {
    const response = await Produk.findAll();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error.message });
  }
};

const getProdukById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Produk.findByPk(id);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error.message });
  }
};

const createProduk = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        return res
          .status(500)
          .send({ msg: "Multer error occurred", error: err });
      } else if (err) {
        // An unknown error occurred when uploading.
        return res.status(500).send({ msg: "An error occurred", error: err });
      }

      // Multer successfully uploaded the file.
      try {
        // Extract other fields from req.body
        const { ...payload } = req.body;
        console.log(payload);
        const imageUrl = req.file ? `/images/${req.file.filename}` : null;

        // Get the filename of the uploaded image
        const image = req.file.filename;

        // Create a new Produk instance with all the fields
        const newProduk = new Produk({
          namaProduk: payload.namaProduk,
          harga: payload.harga,
          stok: payload.stok,
          url: imageUrl,
          image: image, // Save the filename in the 'image' field
        });

        // Save the new Produk instance to the database
        newProduk.save();

        return res
          .status(201)
          .send({ msg: "Successfully created Produk", data: newProduk });
      } catch (err) {
        return res
          .status(500)
          .send({ msg: "Error creating Produk", error: `error:  ${err}` });
      }
    });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", error: error });
  }
};

const UpdateProduk = async (req, res) => {
  try {
    const { ...payload } = req.body;
    const { id } = req.params;
    console.log(id);
    const dataCheck = await Produk.findByPk(id);
    if (!dataCheck)
      return res.status(409).send({ msg: "Tidak ada data Produk" });
    const response = await Produk.update({ ...payload }, { where: { id: id } });
    return res
      .status(201)
      .send({ msg: "Successfully Updated Produk " + response });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" + error });
  }
};

const DeleteProduk = async (req, res) => {
  try {
    const { id } = req.params;
    const dataCheck = await Produk.findByPk(id);
    if (!dataCheck) return res.status(404).send({ msg: "Produk not found" });
    const response = await Produk.destroy({ where: { id: id } });
    return res.status(200).send({ msg: `Produk ${response} Deleted` });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = {
  getProduk,
  getProdukById,
  createProduk,
  UpdateProduk,
  DeleteProduk,
};
