let sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr", {
  // logging: false;
})

module.exports = db;
