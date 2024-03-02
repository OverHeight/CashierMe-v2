const { DataTypes } = require("sequelize");
const db = require("../config/Database");
const Penjualan = require("./PenjualanModel");

const Pelanggan = db.define(
  "pelanggan",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    namaPelanggan: DataTypes.STRING,
    alamat: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    nomorTelepon: {
      type: DataTypes.CHAR,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);
Pelanggan.hasOne(Penjualan, {
  foreignKey: "pelangganId",
});

module.exports = Pelanggan;
