const express = require("express");
const {
  getUser,
  getUserById,
  createUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/UserController");

const router = express.Router();

router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", UpdateUser);
router.delete("/:id", DeleteUser);

module.exports = router;
