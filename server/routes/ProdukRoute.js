const express = require("express");
const {
  getProduk,
  getProdukById,
  createProduk,
  UpdateProduk,
  DeleteProduk,
} = require("../controllers/ProdukController");

const router = express.Router();

router.get("/", getProduk);
router.get("/:id", getProdukById);
router.post("/", createProduk);
router.put("/:id", UpdateProduk);
router.delete("/:id", DeleteProduk);

module.exports = router;
