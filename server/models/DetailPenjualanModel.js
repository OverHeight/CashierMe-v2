const { DataTypes } = require("sequelize");
const db = require("../config/Database");

const DetailPenjualan = db.define(
  "DetailPenjualan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    namaPelanggan: DataTypes.STRING,
    jumlahProduk: DataTypes.INTEGER,
    subTotal: DataTypes.DECIMAL,
  },
  {
    freezeTableName: true,
  }
);

module.exports = DetailPenjualan;
