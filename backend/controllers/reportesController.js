const mysqlConnection = require('../db');


class reportesController {
  constructor() {
  }

  async guardar(req, res) {
    try {
      let {descripcion, direccion} = req.body;

      await mysqlConnection.query('INSERT INTO reportes SET ?', {descripcion, direccion});

      res.status(200).json({auth: true, message: 'Su reporte ha sido registrado exitosamente'});

    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Error: " + err.toString()});
    }

  };

  async mostrarReportes(req, res) {

    await mysqlConnection.query('SELECT * FROM reportes', (err, data) =>{
      if(!err) {
        res.json(data);
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async mostrarReporte(req, res) {
    let {id} = req.params;

    await mysqlConnection.query('SELECT * FROM reportes WHERE reporte_id = ?', [id], (err, rows, fields) =>{
      if(!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async eliminarReporte(req, res) {
    let {id} = req.params;

    await mysqlConnection.query('DELETE  FROM reportes WHERE reporte_id = ?', [id], (err, rows, fields) =>{
      if(!err) {
        res.json({status: 'Su reporte ha sido eliminado'});
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async actualizarReporte(req, res) {
    try {
      const {descripcion, direccion} = req.body;
      const {id} = req.params;
      const newReporte = {descripcion, direccion}

      await mysqlConnection.query('UPDATE reportes set ? WHERE reporte_id = ?', [newReporte, id]);
      res.json({status: 'Su reporte se ha actualizado'});

    } catch (err) {
      res.status(500).json({message: "Error: " + err.toString()});
    }
  }



}

module.exports = reportesController;
