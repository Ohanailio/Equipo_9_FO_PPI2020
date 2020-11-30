const mysqlConnection = require('../db');


class fundacionController {
  constructor() {
  }

  async guardar(req, res) {
    try {
      let {fundacion, direccion} = req.body;

      await mysqlConnection.query('INSERT INTO fundaciones SET ?', {fundacion, direccion});

      res.status(200).json({auth: true, message: 'Fundacion registrada exitosamente'});

    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Error: " + err.toString()});
    }

  };

  async mostrarFundaciones(req, res) {

    await mysqlConnection.query('SELECT * FROM fundaciones', (err, data) =>{
      if(!err) {
        res.json(data);
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async mostrarFundacion(req, res) {
    let {id} = req.params;

    await mysqlConnection.query('SELECT * FROM fundaciones WHERE fundacion_id = ?', [id], (err, rows, fields) =>{
      if(!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async eliminarFundacion(req, res) {
    let {id} = req.params;

    await mysqlConnection.query('DELETE  FROM fundaciones WHERE fundacion_id = ?', [id], (err, rows, fields) =>{
      if(!err) {
        res.json({status: 'La fundacion ha sido eliminada'});
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async actualizarFundacion(req, res) {
    try {
      const {fundacion, direccion} = req.body;
      const {id} = req.params;
      const newFundacion = {fundacion, direccion}

      await mysqlConnection.query('UPDATE fundaciones set ? WHERE fundacion_id = ?', [newFundacion, id]);
      res.json({status: 'La fundacion se ha actualizado'});

    } catch (err) {
      res.status(500).json({message: "Error: " + err.toString()});
    }
  }



}

module.exports = fundacionController;
