const mysqlConnection = require('../db');

class fundacionController {
  constructor() {
  }

  async guardar(req, res) {
    try {
      let {tipo} = req.body;

      await mysqlConnection.query('INSERT INTO denuncias SET ?', {tipo});

      res.status(200).json({auth: true, message: 'Denuncia registrada exitosamente'});

    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Error: " + err.toString()});
    }

  };

  async mostrarDenuncias(req, res) {

    await mysqlConnection.query('SELECT * FROM denuncias', (err, data) =>{
      if(!err) {
        res.json(data);
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async mostrarDenuncia(req, res) {
    let {id} = req.params;

    await mysqlConnection.query('SELECT * FROM denuncias WHERE denuncia_id = ?', [id], (err, rows, fields) =>{
      if(!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async eliminarDenuncia(req, res) {
    let {id} = req.params;

    await mysqlConnection.query('DELETE  FROM denuncias WHERE denuncia_id = ?', [id], (err, rows, fields) =>{
      if(!err) {
        res.json({status: 'La denuncia ha sido eliminada'});
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async actualizarDenuncia(req, res) {
    try {
      const {tipo} = req.body;
      const {id} = req.params;
      const newDenuncia = {tipo}

      await mysqlConnection.query('UPDATE denuncias set ? WHERE denuncia_id = ?', [newDenuncia, id]);
      res.json({status: 'La denuncia se ha actualizado'});

    } catch (err) {
      res.status(500).json({message: "Error: " + err.toString()});
    }
  }



}

module.exports = fundacionController;
