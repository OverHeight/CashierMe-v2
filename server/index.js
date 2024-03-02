const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./config/Database");
const DetailPenjualan = require("./models/DetailPenjualanModel");
const Pelanggan = require("./models/PelangganModel");
const Penjualan = require("./models/PenjualanModel");
const Produk = require("./models/ProdukModel");
const User = require("./models/UserModel");
const routes = require("./routes");
const dotenv = require("dotenv");
const multer = require("multer");
dotenv.config();

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const corsOptions = {
  allowedHeaders: ['Authorization', 'Content-Type'],
};

const app = express();
const port = process.env.PORT || 5005;
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public", "images")));
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", routes());

app.listen(port, () => console.log(`Server starting!`));

(async () => {
  try {
    await db.authenticate();
    console.log("Authenticated");

    await db.sync(DetailPenjualan);
    await db.sync(Pelanggan);
    await db.sync(Penjualan);
    await db.sync(Produk);
    await db.sync(User);
    // await db.sync({ force: true });
    console.log("Model sync success");
  } catch (error) {
    console.error(error);
  }
})();
