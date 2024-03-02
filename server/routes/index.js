const PelangganRoute = require("./PelangganRoute");
const PenjualanRoute = require("./PenjualanRoute");
const ProdukRoute = require("./ProdukRoute");
const AuthRoute = require("./AuthRoute");
const UserRoute = require("./UserRoute");
const express = require("express");
const { checkAuth } = require("../utils");

const routes = () => {
  const app = express();

  app.use("/pelanggan", PelangganRoute);
  app.use("/penjualan", PenjualanRoute);
  app.use("/produk", ProdukRoute);
  app.use("/auth", AuthRoute);
  app.use("/user", UserRoute);

  return app;
};

module.exports = routes;
