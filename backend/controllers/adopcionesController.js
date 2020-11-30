const mysqlConnection = require('../db');


class adopcionesController {
  constructor() {
  }

  async obtenerAdopciones(req, res) {
    try {

      await mysqlConnection.query('SELECT adopciones.adopcion_id, usuarios.nombre as propietario, fundaciones.fundacion as lugar' +
        'FROM adopciones INNER JOIN usuarios ON adopciones.usuario_id=usuario_id ' +
        'INNER JOIN fundaciones ON adopciones.fundacion_id =fundacion.fundacion_id');

      res.status(200).json({auth: true, message: 'Esta es la informacion registrada'});

    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Error: " + err.toString()});
    }

  };

}

module.exports = adopcionesController;
