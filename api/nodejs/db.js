// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');
require('dotenv').config();

// Retrieve the Certificate Authority chain file (using the File System package)
//const fs = require("fs");
//const serverCert = [fs.readFileSync("skysql_chain.pem", "utf8")];

// Create a connection pool
var pools = [
  mariadb.createPool({
    host: process.env.DB_HOST_1, 
    user: process.env.DB_USER_1, 
    password: process.env.DB_PASS_1,
    port: process.env.DB_PORT_1,
    database: process.env.DB_NAME_1,
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
