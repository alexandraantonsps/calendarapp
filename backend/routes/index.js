'use strict';
const sqlConnection = require('../connection');

let sqlRequest;
sqlConnection.connect().then((req) => {
  sqlRequest = req
})

module.exports = [{
  method: 'GET',
  path: '/api/getEventList',
  config: {
    handler: async (request, h) => {
      return await sqlRequest.query(`SELECT  *
      FROM event`).then((recordset, err) => {
        if (err) {
          console.log(err);
        }
        return recordset.recordset;
      })
    },
  }
},
{
  method: 'GET',
  path: '/api/getEvent/{uuid}',
  config: {
    handler: async (request, h) => {
      let uuid = request.params.uuid

      var query = `SELECT * FROM event WHERE uuid= '${uuid}'`;

      return await sqlRequest.query(query).then((data, err) => {
        if (err) {
          console.log(err);
        }
        return data.recordset
      });

    },
  }
}
]