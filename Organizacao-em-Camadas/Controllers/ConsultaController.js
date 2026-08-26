const ConsultaService = require('../Services/ConsultaService');

class ConsultaController {

    getAll(req, res) {
        const consultas = ConsultaService.listarTodos();
        res.status(200).json(consultas);
    }

    getById(req, res) {
        try {
            const { id } = req.params;
            const consulta = ConsultaService.buscarPorId(id);
            res.status(200).json(consulta);
        } catch (error) {
            res.status(404).json({ error: "Consulta não encontrada." });
        }
    }

    // cadastrar uma consulta
    create(req, res) {
        try {
            const novaConsulta = ConsultaService.criarConsulta(req.body);
            res.status(201).json(novaConsulta);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // atualiza dados da consulta
    update(req, res) {
        try {
            const { id } = req.params;
            const consultaAtualizada = ConsultaService.atualizarConsulta(id, req.body);
            res.status(200).json(consultaAtualizada);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // atualiza parcialmente dados da consulta (PATCH)
    patch(req, res) {
        try {
            const { id } = req.params;
            const consultaAtualizada = ConsultaService.atualizarParcial(id, req.body);
            res.status(200).json(consultaAtualizada);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // deleta consulta por id
    delete(req, res) {
        try {
            const { id } = req.params;
            ConsultaService.removerConsulta(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: "Não foi possível deletar esta consulta." });
        }
    }

}

module.exports = new ConsultaController();