require ("dotenv").config ()
const db_pass = process.env.DB_PASS
const db_name = process.env.DB_NAMEDATABSE

module.exports = {
  
  dialect: "postgres",
  host:"localhost",
  username: "postgres",
  password: db_pass,
  database: db_name,
  define: {
  timestamps: true,
  }
}


