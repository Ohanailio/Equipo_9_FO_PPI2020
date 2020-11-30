const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  connectionLimit: 10,
  host: 'bt3nqb247lwcru4rayfo-mysql.services.clever-cloud.com',
  user: 'uhjxzh1mnf6d5p5e',
  password: 'FYw3xLxViAU5POhNhYL2',
  database: 'bt3nqb247lwcru4rayfo',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Se ha iniciado conexión con la base de datos');
  }
});

module.exports = mysqlConnection;
