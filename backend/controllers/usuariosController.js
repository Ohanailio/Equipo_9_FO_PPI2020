const mysqlConnection = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const {encryptPassword} = require('../utils/bcrypt');
const config = require('../utils/config');

class usuarioController {
  constructor() {
  }

  async guardar(req, res) {
    try {
      let {nombre, correo, contrasenia} = req.body;
      contrasenia = await encryptPassword(contrasenia);

      await mysqlConnection.query('INSERT INTO usuarios SET ?', {nombre, correo, contrasenia});

      res.status(200).json({auth: true, message: 'Usuario registrado exitosamente'});

    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Error: " + err.toString()});
    }

  };

  async login(req, res) {
    try {
      const {correo, contrasenia} = req.body;

      if(!correo || !contrasenia ) {
        console.log('por favor escribe un correo o contrasenia validos')
        return res.status(400).json({message: 'por favor escribe un correo o contrasenia validos'})
      }

      mysqlConnection.query('SELECT * FROM usuarios WHERE correo = ?', [correo], async (err, data) =>{
        console.log(data)


        if(!data || !(await bcrypt.compare(contrasenia, data[0].contrasenia))){
          res.status(401).json({message: 'El correo o la contrasenia son incorrectos'})
        } else {
          const id = data[0].id;
          const token = jwt.sign({id}, config.secretAuthKey, {
            expiresIn: 60 * 60 * 365
          });
          console.log(token);
          const cookieOptions = {
            expires: new Date(
              Date.now() + 90 * 24 * 60 * 60 * 1000
            ),
            httpOnly:true
          }
          res.cookie('jwt', token, cookieOptions);
          res.status(200).json({message: 'todo es correcto'})
        }

      })

    } catch(error) {
      res.status(500).json({ message: "Error: " + err.toString() });

    }
  }

}

module.exports = usuarioController;
