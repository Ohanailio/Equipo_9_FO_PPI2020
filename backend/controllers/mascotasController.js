const mysqlConnection = require('../db');

class mascotaController {
  constructor() {
  }

  async guardar(req, res) {
    try {
      const {nombre, edad, raza} = req.body;
      console.log(nombre)

      await mysqlConnection.query('INSERT INTO mascotas SET ?', {nombre, edad, raza});

      res.status(200).json({message: 'Mascota registrada'});

    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Error: " + error.toString()});
    }

  };

  async mostrarMascotas(req, res) {

    await mysqlConnection.query('SELECT * FROM mascotas', (err, data) =>{
      if(!err) {
        res.json(data);
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async mostrarMascota(req, res) {
    let {id} = req.params;

    await mysqlConnection.query('SELECT * FROM mascotas WHERE mascota_id = ?', [id], (err, rows, fields) =>{
      if(!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async eliminarMascota(req, res) {
    let {id} = req.params;

    await mysqlConnection.query('DELETE  FROM mascotas WHERE mascota_id = ?', [id], (err, rows, fields) =>{
      if(!err) {
        res.json({status: 'La mascota ha sido eliminada', rows});
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async actualizarMascota(req, res) {
    try {
      const {nombre, edad, raza} = req.body;
      const {id} = req.params;
      const newMascota = {nombre, edad, raza}

      await mysqlConnection.query('UPDATE mascotas set ? WHERE mascota_id = ?', [newMascota, id]);
      res.json({status: 'La informacion de la mascota se ha actualizado'});

    } catch (err) {
      res.status(500).json({message: "Error: " + err.toString()});
    }
  }

}

module.exports = mascotaController;
