const Sequelize = require("sequelize");

// TODO: adjust these connection details to match your SingleStore deployment:
const HOST =
  "svc-2445a0c1-7220-4dbc-8bf9-70261cfb2788-dml.aws-virginia-2.svc.singlestore.com";
const PORT = 3306;
const USER = "admin";
const PASSWORD = "w4McV2amK78PeyH";
const DATABASE = "fastify";

module.exports = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: "mysql",
});
