const express = require("express");
const {
    getDetailPenjualan,
    getDetailPenjualanById,
    createDetailPenjualan,
    UpdateDetailPenjualan,
    DeleteDetailPenjualan,
} = require("../controllers/DetailPenjualanController");

const router = express.Router();

router.get("/", getDetailPenjualan);
router.get("/:id", getDetailPenjualanById);
router.post("/", createDetailPenjualan);
router.put("/:id", UpdateDetailPenjualan);
router.delete("/:id", DeleteDetailPenjualan);

module.exports = router;
