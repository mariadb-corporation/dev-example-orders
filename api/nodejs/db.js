var mariadb = require('mariadb');
//require('dotenv').config();

// SSL (e.g. SkySQL) connections 
// * Remember to change the location of "skysql_chain.pem" to wherever you placed it!
// * To use just uncomment the two lines below and the 'ssl' property (and value) within the connection pool configuration

const fs = require("fs");
const serverCert = [fs.readFileSync("skysql_chain.pem", "utf8")];

var pools = [
  mariadb.createPool({
    host: 'sky0001623.mdb0001344.db.skysql.net',
    user: 'DB00001969',
    password: '0XY4OF_JLJbU)953Qg6xxNN8',
    database: 'orderstx',
    port: 5001,
    multipleStatements: true,
    connectionLimit: 5,
    ssl: {
      ca: serverCert
    }
  }),
  mariadb.createPool({
    host: 'sky0001623.mdb0001344.db.skysql.net',
    user: 'DB00001970',
    password: 'inaP@^I9g91KLm7zfsCa0F99',
    database: 'ordersax',
    port: 5002,
    multipleStatements: true,
    connectionLimit: 5,
    ssl: {
      ca: serverCert
    }
  }),
  mariadb.createPool({
    host: 'sky0001623.mdb0001344.db.skysql.net',
    user: 'DB00001969',
    password: '0XY4OF_JLJbU)953Qg6xxNN8',
    database: 'bigorderstx',
    port: 5001,
    multipleStatements: true,
    connectionLimit: 5,
    ssl: {
      ca: serverCert
    }
  }),
  mariadb.createPool({
    host: 'sky0001623.mdb0001344.db.skysql.net',
    user: 'DB00001970',
    password: 'inaP@^I9g91KLm7zfsCa0F99',
    database: 'bigordersax',
    port: 5002,
    multipleStatements: true,
    connectionLimit: 5,
    ssl: {
      ca: serverCert
    }
  })
];

module.exports={
  getConnection: function(config_id){
    return new Promise(function(resolve,reject){
      console.log("config_id"+config_id);
      pools[config_id].getConnection().then(function(connection){
        resolve(connection);
      }).catch(function(error){
        reject(error);
      });
    });
  }
} 
