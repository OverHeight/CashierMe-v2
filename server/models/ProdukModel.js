const { DataTypes } = require("sequelize");
const db = require("../config/Database");
const DetailPenjualan = require("./DetailPenjualanModel");

const Produk = db.define(
  "Produk",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    namaProduk: DataTypes.STRING,
    harga: DataTypes.DECIMAL,
    stok: DataTypes.INTEGER,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
Produk.hasMany(DetailPenjualan, {
  foreignKey: "produkId",
});

module.exports = Produk;
