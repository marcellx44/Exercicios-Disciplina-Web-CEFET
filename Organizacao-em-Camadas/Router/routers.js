const express = require('express');
const router = express.Router();

const MedicoController = require('../Controllers/MedicoController');
const PacienteController = require('../Controllers/PacienteController');
const ConsultaController = require('../Controllers/ConsultaController');

// Medico 
router.get('/medico', (req, res) => MedicoController.getAll(req, res));
router.get('/medico/:id', (req, res) => MedicoController.getById(req, res));
router.post('/medico', (req, res) => MedicoController.create(req, res));
router.put('/medico/:id', (req, res) => MedicoController.update(req, res));
router.delete('/medico/:id', (req, res) => MedicoController.delete(req, res));

// Paciente 

router.get('/paciente', (req, res) => PacienteController.getAll(req, res));
router.get('/paciente/:id', (req, res) => PacienteController.getById(req, res));
router.post('/paciente', (req, res) => PacienteController.create(req, res));
router.put('/paciente/:id', (req, res) => PacienteController.update(req, res));
router.delete('/paciente/:id', (req, res) => PacienteController.delete(req, res));

// Consultas

router.get('/consulta', (req, res) => ConsultaController.getAll(req, res));
router.get('/consulta/:id', (req, res) => ConsultaController.getById(req, res));
router.post('/consulta', (req, res) => ConsultaController.create(req, res));
router.put('/consulta/:id', (req, res) => ConsultaController.update(req, res));
router.delete('/consulta/:id', (req, res) => ConsultaController.delete(req, res));


module.exports = router;