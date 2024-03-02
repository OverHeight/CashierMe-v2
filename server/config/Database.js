const { Sequelize } = require("sequelize");

const db = new Sequelize("kasir", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;

(async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
