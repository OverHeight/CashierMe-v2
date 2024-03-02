const express = require("express");
const {
  getPelanggan,
  getPelangganById,
  createPelanggan,
  UpdatePelanggan,
  DeletePelanggan,
} = require("../controllers/PelangganController");

const router = express.Router();

router.get("/", getPelanggan);
router.get("/:id", getPelangganById);
router.post("/", createPelanggan);
router.put("/:id", UpdatePelanggan);
router.delete("/:id", DeletePelanggan);

module.exports = router;
