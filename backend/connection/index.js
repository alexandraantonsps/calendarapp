'use strict';
const sql = require('mssql');

const dbConfig = {
  server: 'localhost',
  database: 'calendar',
  user: 'sa',
  password: 'rootPwd123',
  "options": {
    "encrypt": true,
    "enableArithAbort": true
  }
}

const sqlConnection = new sql.ConnectionPool(dbConfig);

module.exports = sqlConnection
sqlConnection.close()