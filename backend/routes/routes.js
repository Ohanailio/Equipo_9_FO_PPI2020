const router = require("express").Router();

const fundacionController = require("../controllers/fundacionesController");
const mascotaController = require("../controllers/mascotasController");
const usuarioController = require("../controllers/usuariosController");
const adopcionController = require("../controllers/adopcionesController");
const denunciaController = require("../controllers/denunciasController");
const reporteController = require("../controllers/reportesController");


const fundacion = new fundacionController();
const mascota = new mascotaController();
const usuario = new usuarioController();
const adopcion = new adopcionController();
const denuncia = new denunciaController();
const reporte = new reporteController();



// Fundaciones
router.route('/agregarFundacion').post(fundacion.guardar);
router.route('/fundaciones').get(fundacion.mostrarFundaciones);
router.route('/fundacion/:id').get(fundacion.mostrarFundacion);
router.route('/eliminarFundacion/:id').delete(fundacion.eliminarFundacion);
router.route('/actualizarFundacion/:id').put(fundacion.actualizarFundacion);

//mascotas
router.route('/agregarMascota').post(mascota.guardar);
router.route('/mascotas').get(mascota.mostrarMascotas);
router.route('/mascota/:id').get(mascota.mostrarMascota);
router.route('/eliminarMascota/:id').delete(mascota.eliminarMascota);
router.route('/actualizarMascota/:id').put(mascota.actualizarMascota);


//usuarios
router.route('/registro').post(usuario.guardar);
router.route('/login').post(usuario.login);


//adopciones
router.route('/adopciones').get(adopcion.obtenerAdopciones);

//Denuncias
router.route('/agregarDenuncia').post(denuncia.guardar);
router.route('/denuncias').get(denuncia.mostrarDenuncias);
router.route('/denuncia/:id').get(denuncia.mostrarDenuncia);
router.route('/eliminarDenuncia/:id').delete(denuncia.eliminarDenuncia);
router.route('/actualizarDenuncia/:id').put(denuncia.actualizarDenuncia);

//Reportes
router.route('/agregarReporte').post(reporte.guardar);
router.route('/reportes').get(reporte.mostrarReporte);
router.route('/reporte/:id').get(reporte.mostrarReporte);
router.route('/eliminarReporte/:id').delete(reporte.eliminarReporte);
router.route('/actualizarReporte/:id').put(reporte.actualizarReporte);

module.exports = router;
