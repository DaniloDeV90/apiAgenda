require ("dotenv").config ()


require("dotenv").config();
const Neon = require ("neon-js")

module.exports = {
  dialect: "postgres",
  username: process.env.DB_USER,
  host:process.env.DB_HOST,

  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialectOptions: {
  neon: Neon,
  ssl:true
  },
  

};




