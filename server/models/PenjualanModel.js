const { DataTypes } = require("sequelize");
const db = require("../config/Database");
const DetailPenjualan = require("./DetailPenjualanModel");

const Penjualan = db.define(
  "penjualan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tanggalPenjualan: DataTypes.DATE,
    totalHarga: DataTypes.DECIMAL,
  },
  {
    freezeTableName: true,
  }
);
Penjualan.hasOne(DetailPenjualan, {
  foreignKey: "penjualanId",
});

module.exports = Penjualan;
