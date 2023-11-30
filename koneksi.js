var mysql = require("mysql");

// Connect DB
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tes_api",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Terkoneksi");
});

module.exports = conn;
