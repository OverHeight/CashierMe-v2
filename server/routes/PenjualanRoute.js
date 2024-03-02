const express = require("express");
const {
  getPenjualan,
  getPenjualanById,
  createPenjualan,
  UpdatePenjualan,
  DeletePenjualan,
} = require("../controllers/PenjualanController");

const router = express.Router();

router.get("/", getPenjualan);
router.get("/:id", getPenjualanById);
router.post("/", createPenjualan);
router.put("/:id", UpdatePenjualan);
router.delete("/:id", DeletePenjualan);

module.exports = router;
