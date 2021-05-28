// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');
require('dotenv').config();

// Retrieve the Certificate Authority chain file (using the File System package)
//const fs = require("fs");
//const serverCert = [fs.readFileSync("skysql_chain.pem", "utf8")];

// Create a connection pool
var pools = [
  mariadb.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    multipleStatements: true
    /*,
    ssl: {
      ca: serverCert
    }*/
  })
];

// Expose a method to establish connection 
module.exports={
  getConnection: async function(config_id) {
    return pools[config_id].getConnection();
  }
} 