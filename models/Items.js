const Sequelize = require("sequelize");
const db = require("../config/db");

const Item = db.define(
  "items",
  {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    createdate: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Item;
